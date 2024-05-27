// Step 1: Create a variable that can hold an array of NFTs.
let array_nft = [];	
	
// Step 2: Create a mintNFT function to mint NFTs with metadata.
function mintNFT(name, description, cost,  owner) {
    // Create an object to hold the metadata for the NFT.
    const nfts= {
        name: name,
        description: description,
        cost: cost,
        owner: owner
    };

    // Store the NFT in the nftCollection array.
    array_nft.push(nfts);
}

// Step 3: Create a function to list all NFTs.
function listNFTs() {
    array_nft.forEach((nfts, index) => {
        console.log(`NFT #${index + 1}:`);
        console.log("Name: " + nfts.name);
        console.log("Description: " + nfts.description);
        console.log("Cost: " + nfts.cost);
        console.log("Owner: " + nfts.owner);
        console.log('-------------------');
    });
}

// Step 4: Create a function to get the total number of NFTs.
function total_nfts() {
    return array_nft.length;
}

// Example usage:

// Mint some NFTs.
mintNFT("CuteCoin", "It is Cute NFT", "16000", "Ananya Pal");
mintNFT("Handsome-G", "It is Handsome guy NFT", "17000", "Shubham");
mintNFT("Smart", "It is Smart NFT", "15000", "Ratnesh Tiwari");
mintNFT("Gym-Freak", "It is Gym freak NFT", "15000", "Gaurav Singh");
mintNFT("Flirty", "It is Flirty NFT", "15000", "Kiran Tiwary");

// List all NFTs.
listNFTs();

// Get the total supply of NFTs.
console.log("Total Supply: " + total_nfts());
