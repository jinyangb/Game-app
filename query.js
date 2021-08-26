const db = require('./db')
const { Game } = require('./models')

async function main() {
  try {
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

main()
