const { describe, it, expect, test, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('.')
const db = require('../db/config')

let deck

beforeAll(async () => {
    await db.sync({ force: true })
    deck = await Deck.create({ name: "Niv Mizzet", xp: 500 })
  })
  
  // clear db after tests
  afterAll(async () => await db.sync({ force: true }))

  describe('Deck', () => {
    it('has an id', async () => {
      expect(deck).toHaveProperty('id')
    })
  
    test("has correct name", async function() {
      expect(deck.name).toBe('Niv Mizzet');
    })

    test("has correct xp", async function() {
        expect(deck.xp).toBe(500);
      })

    })