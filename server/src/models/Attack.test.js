const { describe, it, test, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('.')
const db = require('../db/config')

let attack

beforeAll(async () => {
    await db.sync({ force: true })
    attack = await Attack.create({ title: 'Sword Swing', mojoCost: 2, staminaCost: 1 })
  })
  
  // clear db after tests
  afterAll(async () => await db.sync({ force: true }))

  describe('Attack', () => {
    it('has an id', async () => {
      expect(attack).toHaveProperty('id')
    })
  
    test("has correct name", async function() {
      expect(attack.title).toBe('Sword Swing');
    })

    test("has correct mojo", async function() {
        expect(attack.mojoCost).toBe(2);
      })

      test("has correct stamina", async function() {
        expect(attack.staminaCost).toBe(1);
      })
    })