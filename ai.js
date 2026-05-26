let model;

async function createModel() {
  model = tf.sequential();

  model.add(tf.layers.dense({
    units: 32,
    activation: "relu",
    inputShape: [3]
  }));

  model.add(tf.layers.dense({
    units: 16,
    activation: "relu"
  }));

  model.add(tf.layers.dense({
    units: 1,
    activation: "sigmoid"
  }));

  model.compile({
    optimizer: "adam",
    loss: "binaryCrossentropy"
  });

  const trainingData = [];
  const labels = [];

  universities.forEach(item => {

    const min = item.contract - 20;
    const max = item.grant + 20;

    for (let i = min; i <= max; i += 5) {

      const score = i;

      const normalizedScore = score / 200;
      const normalizedGrant = item.grant / 200;
      const normalizedContract = item.contract / 200;

      trainingData.push([
        normalizedScore,
        normalizedGrant,
        normalizedContract
      ]);

      const diff = score - item.contract;

      // smoother label (MUHIM FIX)
      const label = diff >= 0 ? 1 : 0.3;

      labels.push(label);
    }
  });

  const xs = tf.tensor2d(trainingData);
  const ys = tf.tensor2d(labels, [labels.length, 1]);

  await model.fit(xs, ys, {
    epochs: 50,
    shuffle: true
  });

  console.log("AI model ready");
}

async function predictChance(score, grant, contract) {
  const input = tf.tensor2d([[
    score / 200,
    grant / 200,
    contract / 200
  ]]);

  const prediction = model.predict(input);
  const value = await prediction.data();

  return Math.min(100, Math.round(value[0] * 100));
}