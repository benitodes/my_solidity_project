const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Counter', () => {
    let counter

    beforeEach( async () => {
        // Load contract 
        const Counter = await ethers.getContractFactory('Counter')

        // Deploy contract
        counter = await Counter.deploy('My counter', 1)
    })


   it('stores the initial count', async () => {
        expect(await counter.count()).to.equal(1)
    })

    it('sets the initial name', async () => {
        expect(await counter.name()).to.equal('My counter')
    })


})