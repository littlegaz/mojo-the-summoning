const { describe, it, test, expect, beforeAll, afterAll } = require('@jest/globals')
const { User, Card, Deck, Attack } = require('.')
const db = require('../db/config')


// beforeAll(async () => {
//     await db.sync({ force: true })
//     attack = await Attack.create({ title: 'Sword Swing', mojoCost: 2, staminaCost: 1 })
//   })
  
  // clear db after tests
//   afterAll(async () => await db.sync({ force: true }))

  describe('user and deck', () => {
    it('has one to one association', async () => {
      const user = await User.create({
        username: 'Gandalf'
      })

      const deck = await Deck.create({ 
        name: "Niv Mizzet", 
        xp: 500 })

        await user.setDeck(deck)
        const associatedDeck = await user.getDeck()
        expect(associatedDeck.UserId).toBe(user.id)

        // const associatedUser = await deck.getUser()
        // expect(associatedUser.DeckId).toBe(deck.id)
    })


    describe('deck and card', () => {
        it('has one to many association', async () => {
          const deck = await Deck.create({
            const card1 = await Card.create({ 
                name: 'Niv Mizzet 1', 
                mojo: 6, 
                stamina: 5 })
          })

          //add 2 more cards here
    
          await deck.addCards([card1, card2, card3])
    
            const associatedCards = await deck.getCards()
            expect(associatedCards[0].name).toBe('Niv Mizzet 1')
            expect(associatedCards[1].name).toBe('Niv Mizzet 2')
            expect(associatedCards[2].name).toBe('Niv Mizzet 3')
  
    
    })

    })})
