import { ethers} from "hardhat";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { Deed__factory, Deed } from "../typechain";

chai.use(chaiAsPromised);
const { expect } = chai;

describe("Deed", () => {
  let deed: Deed;
  const numberToMint = 50;

  beforeEach(async () => {
    // 1
    const signers = await ethers.getSigners();

    // 2
    const deedFactory = (await ethers.getContractFactory(
      "Deed",
      signers[0]
    )) as Deed__factory;
    deed = await deedFactory.deploy();
    await deed.deployed();


    // Mint some deeds.
    await deed.testClaim(numberToMint);
  });

  // 4
  describe("tokenURI()", async () => {
    it("should print token URI string", async () => {
      let i = 0;
      while(i != numberToMint){
        const uri = await deed.tokenURI(i);
        i++;
      }
    });
  });

});
