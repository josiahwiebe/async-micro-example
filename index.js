async function getText () {
  return new Promise((resolve) => {
    setTimeout(() => resolve('> micro is ready!'), 2000)
  })
}

module.exports = async (req, res) => {
  return await getText()
}
