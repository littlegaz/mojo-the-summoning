const { describe, it, test, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('.')
const db = require('../db/config')

let card

beforeAll(async () => {
    await db.sync({ force: true })
    card = await Card.create({ name: 'Niv Mizzet', mojo: 6, stamina: 5 })
  })
  
  // clear db after tests
  afterAll(async () => await db.sync({ force: true }))

  describe('Card', () => {
    it('has an id', async () => {
      expect(card).toHaveProperty('id')
    })
  
    test("has correct name", async function() {
      expect(card.name).toBe('Niv Mizzet');
    })

    test("has correct mojo", async function() {
        expect(card.mojo).toBe(6);
      })

      test("has correct stamina", async function() {
        expect(card.stamina).toBe(5);
      })
    })