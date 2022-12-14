const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('RealEstate', () => {
    let realEstate, escrow
    let deployer, seller
    let nftID = 1

    beforeEach('RealEstate', async () => {
        // Set accounts
        accounts = await ethers.getSigners()
        deployer = accounts[0]
        seller = deployer

        // Load Contracts
        const RealEstate = await ethers.getContractFactory('RealEstate');
        const Escrow = await ethers.getContractFactory('Escrow');

        // Deploy contracts
        realEstate = await RealEstate.deploy()
        escrow = await Escrow.deploy()

    })

    describe('Deployment', () => {

        it('sends an NFT to the seller / deployer', async () => {
            expect(await realEstate.ownerOf(nftID)).to.equal(seller.address)

        })
    })
})