const SuperMarioWorld = artifacts.require("SuperMarioWorld")

module.exports = async function (deployer) {
    await deployer.deploy(SuperMarioWorld, "SuperMarioWorld","SMO");
    const superMarioWorld = await SuperMarioWorld.deployed();

    console.log("SuperMarioWorld was deployed to address",superMarioWorld.address)

    await superMarioWorld.mint("https://ipfs.io/ipfs/QmY26791V8Je25ztw14eiESraYAyoJjeN1bRdyYzoC6bob")

    console.log("NFT minted succesfully")
    
  };
  