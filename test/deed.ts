import { ethers} from "hardhat";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { Deed__factory, Deed } from "../typechain";

chai.use(chaiAsPromised);
const { expect } = chai;

describe("Deed", () => {
  let deed: Deed;
  const numberToMint = 8;

  beforeEach(async () => {
    const signers = await ethers.getSigners();

    const deedFactory = (await ethers.getContractFactory(
      "Deed",
      signers[0]
    )) as Deed__factory;
    deed = await deedFactory.deploy();
    await deed.deployed();
  });

  describe("tokenURI()", async () => {
    it("should print token URI", async () => {
      let i = 0;
      while(i != numberToMint){
        const uri = await deed.tokenURI(i);
        console.log(uri);
        console.log('\n------------------\n');
        i++;
      }
    });
  });

});
