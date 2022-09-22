const nftAddress = "0xf7cfAe960235551b8955ef0402BE650415EABec0";
const gameAddress = "0x6651E71dc1B9BB1F100Dbbf9DAc83AA979c40Db3";
const mpAddress = "0x4D39aECa731488B003d54BB853d9812AB1E154Ba";
const tokenAddress = "0x37bB19ecfD477207B801E3bC3a5faa696B21Ef11";
const maxEnergy = 6;
const maxLevel = 20;
const taxPenalty = 80;
const normalCommon = 5.6;
const normalUc = 8;
const normalRare = 10;
const normalLeg = 13;
const challengeRare = 35;
const challengeLeg = 47;
const costNormalLootbox = 1000;
const commonLevelUpCost = 40;
const uncommonLevelUpCost = 60;
const rareLevelUpCost = 80;
const legendaryLevelUpCost = 100;
const commonSellSc = 200;
const uncommonSellSc = 400;
const rareSellSc = 600;
const legendarySellSc = 800;
const itemPerPage = 12;

const nftAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_rewardpool",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "breedPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_rewardpool",
				"type": "address"
			}
		],
		"name": "changeAddresses",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "safeMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract ERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const gameAbi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "no",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "balances",
				"type": "uint256"
			}
		],
		"name": "deposit",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "gameDeposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "setRewardAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "lastDepositEntry",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_no",
				"type": "uint256"
			}
		],
		"name": "viewDepositData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const mpAbi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "seller",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "closedTransaction",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "seller",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "openSelling",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenid",
				"type": "uint256"
			}
		],
		"name": "buying",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_mpid",
				"type": "string"
			}
		],
		"name": "buyingSc",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenid",
				"type": "uint256"
			}
		],
		"name": "cancelSell",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_mpid",
				"type": "string"
			}
		],
		"name": "cancelSellSc",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "changeRewardAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_percent",
				"type": "uint256"
			}
		],
		"name": "changeRewardPercent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_setprice",
				"type": "uint256"
			}
		],
		"name": "selling",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_mpid",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_setprice",
				"type": "uint256"
			}
		],
		"name": "sellingSc",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_spaceship",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenid",
				"type": "uint256"
			}
		],
		"name": "checkBuyer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_mpid",
				"type": "string"
			}
		],
		"name": "checkBuyerSc",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenid",
				"type": "uint256"
			}
		],
		"name": "checkSeller",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_mpid",
				"type": "string"
			}
		],
		"name": "checkSellerSc",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenid",
				"type": "uint256"
			}
		],
		"name": "isClosed",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_mpid",
				"type": "string"
			}
		],
		"name": "isClosedSc",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardPercentage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "spaceship",
		"outputs": [
			{
				"internalType": "contract ERC721",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract ERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenid",
				"type": "uint256"
			}
		],
		"name": "viewPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_mpid",
				"type": "string"
			}
		],
		"name": "viewPriceSc",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const tokenAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardpool",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_teamfee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rewardfee",
				"type": "uint256"
			}
		],
		"name": "setFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "setRewardAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "setTeamAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "team",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "teamFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_toadr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const web3 = new Moralis.Web3(
    new Moralis.Web3.providers.HttpProvider(
      "https://polygon-mumbai.g.alchemy.com/v2/c5VWzxsfAI_EY3Y9Wq7dsrsWPyfrMmPd"
    )
  );
const logger = Moralis.Cloud.getLogger();
const tokenContract = new web3.eth.Contract(tokenAbi,tokenAddress);
const nftContract = new web3.eth.Contract(nftAbi,nftAddress);

async function checkOwner(tokenId, requestAddress){  
  let contract = new web3.eth.Contract(nftAbi, nftAddress);
  let ownerAddress = await contract.methods.ownerOf(tokenId).call({from:requestAddress});
  return ownerAddress;
}

function btoa (str){ return Buffer.from(str).toString('base64'); }

async function mint(to,spaceship,price){
	const utilityQuery = new Moralis.Query("Utility");
	const utility = await utilityQuery.first({useMasterKey:true}); 
	
	const BN = web3.utils.BN;
	const bnPrice = new BN(price);

	const jsonSpaceship = JSON.stringify(spaceship);

	//const moralisFile = new Moralis.File(spaceship.name+".json",{base64:btoa(jsonSpaceship)});   
    //await moralisFile.saveIPFS({useMasterKey:true}); 
	
	const fileIPFS = await Moralis.Cloud.toIpfs({
		sourceType: "object",
		source: spaceship,
	  },{useMasterKey:true});

	logger.info("file saved "+fileIPFS.path);
	
	const adminK = utility.get("private_key");
	let success = false;
	let transactionHash;
	const functionCall = nftContract.methods.safeMint(to,fileIPFS.path,bnPrice.toString()).encodeABI();
	const transactionBody = {
		to: nftAddress,
		data: functionCall,
		gas: 600000,
		gasPrice: web3.utils.toWei("6","gwei")
	};
	await web3.eth.accounts.signTransaction(
		transactionBody,
		adminK
	).then(async (signedTx) => {
		await web3.eth.sendSignedTransaction(
			signedTx.rawTransaction
		).then(async receipt => {
			transactionHash = receipt.transactionHash;
			success = true;
		})
		.catch(err => {
			logger.info("err msg send "+err.message);
			return false;
		});;
	}).catch((err) => {
		logger.info("err msg sign "+err.message);
		return false;
	});	

	if(success){
		return transactionHash;
	}
}

Moralis.Cloud.define("mintSpaceship", async function (request) {  
	const to = request.params.ethAddress;
	const utilityQuery = new Moralis.Query("Utility");
	const utility = await utilityQuery.first({useMasterKey:true}); 

	const price = await nftContract.methods.minPrice().call({from:to});
	logger.info('price '+price);

	let Spaceship = {
        image:"",
        name:"",   
		description:"",     
        weapon1:"",
        weapon2:"",
        weapon3:"",
        special:"",
        rarity:0,
        durability:0,
        health:0,
        power:0,
		attributes:[]
	}

	let rarity = Math.random()*100;
	if(utility.get("presale")==1){
		if(rarity<=3){
			Spaceship.rarity = 4;
		}else{
			rarity = Math.random()*100;
			if(rarity<=17){
				Spaceship.rarity = 3;
			}else{
				rarity = Math.random()*100;
				if(rarity<=50){
					Spaceship.rarity = 2;
				}else{
					Spaceship.rarity = 1;
				}
			}
		}
	}else{
		if(rarity<=70){
			Spaceship.rarity = 2;
		}else{
			Spaceship.rarity = 1;
		}
	}

	logger.info('rarity build '+Spaceship.rarity);
	Spaceship = await setAttribute(Spaceship,false,"");

	logger.info('set attribute');
	return await mint(to,Spaceship,price.toString());
});

async function setAttribute(s,fusion,_name){
	let _weaponsTemp;
	let _weaponRand;
	let index;
	let imgIdx; 

	const cWeaponQuery = new Moralis.Query("Spaceship_Weapons");
	cWeaponQuery.equalTo("rarity",1);
	const commonWeapons = await cWeaponQuery.find({useMasterKey:true});
	const ucWeaponQuery = new Moralis.Query("Spaceship_Weapons");
	ucWeaponQuery.equalTo("rarity",1);
	ucWeaponQuery.equalTo("rarity",2);
	const uncommonWeapons = await ucWeaponQuery.find({useMasterKey:true});
	const rWeaponQuery = new Moralis.Query("Spaceship_Weapons");
	rWeaponQuery.equalTo("rarity",1);
	rWeaponQuery.equalTo("rarity",2);
	rWeaponQuery.equalTo("rarity",3);
	const rareWeapons = await rWeaponQuery.find({useMasterKey:true});
	const lWeaponQuery = new Moralis.Query("Spaceship_Weapons");
	const legendaryWeapons = await lWeaponQuery.find({useMasterKey:true});

	if(s.rarity==1){
		if(!fusion){
			const cImagesQuery = new Moralis.Query("Spaceship_Images");
			cImagesQuery.equalTo("rarity",1);
			const commonImages =  await cImagesQuery.find({useMasterKey:true});

			logger.info("common images "+commonImages.length);

			imgIdx = Math.floor(Math.random()*(commonImages.length));

			s.image = commonImages[imgIdx].get("ipfs");
			s.name = commonImages[imgIdx].get("name");
		}else{
			const cImagesQuery = new Moralis.Query("Spaceship_Images");
			cImagesQuery.equalTo("rarity",1);
			cImagesQuery.equalTo("name",_name);
			const commonImages =  await cImagesQuery.first({useMasterKey:true});
			s.image = commonImages.get("ipfs");
			s.name = commonImages.get("name");
		}

		s.weapon1 = commonWeapons[Math.floor(Math.random()*commonWeapons.length)].get("name");		         
		s.durability = 100+Math.floor(Math.random()*201);
		s.health = 3;
		s.power = 1;

		const nameQuery = new Moralis.Query("Spaceship_Names");
		nameQuery.equalTo("name",s.name);
		const spaceshipsName = await nameQuery.first({useMasterKey:true});

		s.special = spaceshipsName.get("special");
		s.description = spaceshipsName.get("description");
		s.attributes = [
			{
				trait_type:"weapon1",
				value:s.weapon1
			},
			{
				trait_type:"special",
				value:s.special
			},
			{
				trait_type:"durability",
				value:s.durability,
				max_value:500
			},
			{
				trait_type:"health",
				value:s.health,
				max_value:5
			},
			{
				trait_type:"power",
				value:s.power,
				max_value:5
			}
		];
	}else if(s.rarity == 2){		
		_weaponsTemp = [];
		index = 0;
		for(i=0;i<commonWeapons.length;i++){
			_weaponsTemp[index] = commonWeapons[i];
			index++;
		}   
		for(i=0;i<uncommonWeapons.length;i++){
			_weaponsTemp[index] = uncommonWeapons[i];
			index++;
		}         
		
		if(!fusion){
			const ucImagesQuery = new Moralis.Query("Spaceship_Images");
			ucImagesQuery.equalTo("rarity",2);
			const uncommonImages = await ucImagesQuery.find({useMasterKey:true});

			imgIdx = Math.floor(Math.random()*(uncommonImages.length));

			logger.info("uncommon images "+uncommonImages.length);

			s.image = uncommonImages[imgIdx].get("ipfs");
			s.name = uncommonImages[imgIdx].get("name");
		}else{
			const ucImagesQuery = new Moralis.Query("Spaceship_Images");
			ucImagesQuery.equalTo("rarity",2);
			ucImagesQuery.equalTo("name",_name);
			const uncommonImages = await ucImagesQuery.first({useMasterKey:true});
			s.image = uncommonImages.get("ipfs");
			s.name = uncommonImages.get("name");
		}
				
		s.durability = 200+Math.floor(Math.random()*101);
		s.health = 3+Math.floor(Math.random()*2);
		s.power = 1+Math.floor(Math.random()*3);

		_weaponRand = Math.floor(Math.random()*_weaponsTemp.length);
		s.weapon1 = _weaponsTemp[_weaponRand].get("name");  
		_weaponsTemp.splice(_weaponRand,1);

		_weaponRand = Math.floor(Math.random()*_weaponsTemp.length);
		s.weapon2 = _weaponsTemp[_weaponRand].get("name"); 
		
		const nameQuery = new Moralis.Query("Spaceship_Names");
		nameQuery.equalTo("name",s.name);
		const spaceshipsName = await nameQuery.first({useMasterKey:true});

		s.special = spaceshipsName.get("special");
		s.description = spaceshipsName.get("description");
		s.attributes = [
			{
				trait_type:"weapon1",
				value:s.weapon1
			},
			{
				trait_type:"weapon2",
				value:s.weapon2
			},
			{
				trait_type:"special",
				value:s.special
			},
			{
				trait_type:"durability",
				value:s.durability,
				max_value:500
			},
			{
				trait_type:"health",
				value:s.health,
				max_value:5
			},
			{
				trait_type:"power",
				value:s.power,
				max_value:5
			}
		];
	}else if(s.rarity == 3){
		_weaponsTemp = [];
		index = 0;
		for(i=0;i<uncommonWeapons.length;i++){
			_weaponsTemp[index] = uncommonWeapons[i];
			index++;
		}
		for(i=0;i<rareWeapons.length;i++){
			_weaponsTemp[index] = rareWeapons[i];
			index++;
		}            
		
		if(!fusion){
			const rImagesQuery = new Moralis.Query("Spaceship_Images");
			rImagesQuery.equalTo("rarity",3);
			const rareImages = await rImagesQuery.find({useMasterKey:true});

			imgIdx = Math.floor(Math.random()*(rareImages.length));

			logger.info("rare images "+rareImages.length);

			s.image = rareImages[imgIdx].get("ipfs");
			s.name = rareImages[imgIdx].get("name");
		}else{
			const rImagesQuery = new Moralis.Query("Spaceship_Images");
			rImagesQuery.equalTo("rarity",3);
			rImagesQuery.equalTo("name",_name);
			const rareImages = await rImagesQuery.first({useMasterKey:true});
			s.image = rareImages.get("ipfs");
			s.name = rareImages.get("name");
		}
				
		s.durability = 300+Math.floor(Math.random()*101);
		s.health = 3+Math.floor(Math.random()*3);
		s.power = 2+Math.floor(Math.random()*3);

		_weaponRand = Math.floor(Math.random()*_weaponsTemp.length);
		s.weapon1 = _weaponsTemp[_weaponRand].get("name");  
		_weaponsTemp.splice(_weaponRand,1);

		_weaponRand = Math.floor(Math.random()*_weaponsTemp.length);
		s.weapon2 = _weaponsTemp[_weaponRand].get("name");
		_weaponsTemp.splice(_weaponRand,1);

		_weaponRand = Math.floor(Math.random()*_weaponsTemp.length);
		s.weapon3 = _weaponsTemp[_weaponRand].get("name");

		const nameQuery = new Moralis.Query("Spaceship_Names");
		nameQuery.equalTo("name",s.name);
		const spaceshipsName = await nameQuery.first({useMasterKey:true});

		s.special = spaceshipsName.get("special");
		s.description = spaceshipsName.get("description");
		s.attributes = [
			{
				trait_type:"weapon1",
				value:s.weapon1
			},
			{
				trait_type:"weapon2",
				value:s.weapon2
			},
			{
				trait_type:"weapon3",
				value:s.weapon3
			},
			{
				trait_type:"special",
				value:s.special
			},
			{
				trait_type:"durability",
				value:s.durability,
				max_value:500
			},
			{
				trait_type:"health",
				value:s.health,
				max_value:5
			},
			{
				trait_type:"power",
				value:s.power,
				max_value:5
			}
		];
	}else if(s.rarity == 4){
		_weaponsTemp = [];
		index = 0;
		for(i=0;i<rareWeapons.length;i++){
			_weaponsTemp[index] = rareWeapons[i];
			index++;
		}
		for(i=0;i<legendaryWeapons.length;i++){
			_weaponsTemp[index] = legendaryWeapons[i];
			index++;
		}             
		
		if(!fusion){
			const lImagesQuery = new Moralis.Query("Spaceship_Images");
			lImagesQuery.equalTo("rarity",4);
			const legendaryImages = await lImagesQuery.find({useMasterKey:true});
			imgIdx = Math.floor(Math.random()*(legendaryImages.length));

			logger.info("legendary images "+legendaryImages.length);
			s.image = legendaryImages[imgIdx].get("ipfs");
			s.name = legendaryImages[imgIdx].get("name");
		}else{
			const lImagesQuery = new Moralis.Query("Spaceship_Images");
			lImagesQuery.equalTo("rarity",4);
			lImagesQuery.equalTo("name",_name);
			const legendaryImages = await lImagesQuery.first({useMasterKey:true});

			
			s.image = legendaryImages.get("ipfs");
			s.name = legendaryImages.get("name");
		}
				
		s.durability = 400+Math.floor(Math.random()*101);
		s.health = 4+Math.floor(Math.random()*2);
		s.power = 3+Math.floor(Math.random()*3);

		_weaponRand = Math.floor(Math.random()*_weaponsTemp.length);
		s.weapon1 = _weaponsTemp[_weaponRand].get("name");  
		_weaponsTemp.splice(_weaponRand,1);

		_weaponRand = Math.floor(Math.random()*_weaponsTemp.length);
		s.weapon2 = _weaponsTemp[_weaponRand].get("name");
		_weaponsTemp.splice(_weaponRand,1);

		_weaponRand = Math.floor(Math.random()*_weaponsTemp.length);
		s.weapon3 = _weaponsTemp[_weaponRand].get("name");  

		const nameQuery = new Moralis.Query("Spaceship_Names");
		nameQuery.equalTo("name",s.name);
		const spaceshipsName = await nameQuery.first({useMasterKey:true});

		s.special = spaceshipsName.get("special");
		s.description = spaceshipsName.get("description");
		s.attributes = [
			{
				trait_type:"weapon1",
				value:s.weapon1
			},
			{
				trait_type:"weapon2",
				value:s.weapon2
			},
			{
				trait_type:"weapon3",
				value:s.weapon3
			},
			{
				trait_type:"special",
				value:s.special
			},
			{
				trait_type:"durability",
				value:s.durability,
				max_value:500
			},
			{
				trait_type:"health",
				value:s.health,
				max_value:5
			},
			{
				trait_type:"power",
				value:s.power,
				max_value:5
			}
		];
	}
	
	return s;
}

Moralis.Cloud.define("syncSpaceships", async function (request) {  
	const user = request.params.user;
	const ethAddress = request.params.ethAddress;
	const spaceships = request.params.spaceships;	

	for(i=0;i<spaceships.length;i++){
		const id = spaceships[i].token_id;
		let nftOwnerAddress = await checkOwner(id,ethAddress);
		logger.info("nft owner "+nftOwnerAddress.toUpperCase());
		logger.info("eth address "+ethAddress.toUpperCase());
		
		const SpaceshipObj = Moralis.Object.extend("Spaceships");
		const query = new Moralis.Query(SpaceshipObj);
		query.equalTo("token_id",parseInt(id));
		const results = await query.find({useMasterKey:true});

		logger.info("spaceships "+results.length);
		if(results.length>1){
			for(b=0;b<results.length;b++){
				await results[b].destroy({useMasterKey:true});
			}
		}

		let spaceshipData;
		if(ethAddress.toUpperCase() == nftOwnerAddress.toUpperCase()){
			//logger.info("nft: "+nftDetail[1]);
			if(results.length == 0){//write new spaceship into database if not exist
				const spaceshipUri = await nftContract.methods.tokenURI(id).call({from:ethAddress});
				logger.info("uri "+spaceshipUri);
				await Moralis.Cloud.httpRequest({
					url: spaceshipUri,
				}).then(async function(httpResponse) {
					logger.info(httpResponse.text);
					spaceshipData = httpResponse.data;

					logger.info("data "+spaceshipData);
					const Spaceship = new SpaceshipObj();
					Spaceship.set("token_id",parseInt(id));
					Spaceship.set("rarity",spaceshipData.rarity);
					Spaceship.set("weapon1",spaceshipData.weapon1);
					Spaceship.set("weapon2",spaceshipData.weapon2);
					Spaceship.set("weapon3",spaceshipData.weapon3);
					Spaceship.set("special",spaceshipData.special);
					Spaceship.set("image",spaceshipData.image);
					Spaceship.set("name",spaceshipData.name);
					Spaceship.set("level",1);
					Spaceship.set("health",spaceshipData.health);
					Spaceship.set("durability",spaceshipData.durability);
					Spaceship.set("durability_max",spaceshipData.durability);
					Spaceship.set("power",spaceshipData.power);
					Spaceship.set("owner",user);
					Spaceship.set("ethAddress",ethAddress);
					await Spaceship.save(null,{useMasterKey:true}); 
				}, function(httpResponse) {
					logger.error('Request failed with response code ' + httpResponse.status);
				});

								 
				//return Spaceship;
			}else{//update owner and ethAddress if different
				if(results[0].get("ethAddress")!=ethAddress){
					results[0].set("ethAddress",ethAddress);
					await results[0].save(null,{useMasterKey:true});
				}
				if(results[0].get("owner")!=user){
					results[0].set("owner",user);
					await results[0].save(null,{useMasterKey:true});
				}
				//return results[0];
				}
			}
		}	
  });

/*Moralis.Cloud.define("syncSpaceship", async function (request) {  
  const id = request.params.token_id;
  const nftDetail = request.params.nftDetail;
  const user = request.params.user;
  const ethAddress = request.params.ethAddress;
  
  let nftOwnerAddress = await checkOwner(id,ethAddress);
  logger.info("nft owner "+nftOwnerAddress.toUpperCase());
  logger.info("eth address "+ethAddress.toUpperCase());
  const checkQuery = new Moralis.Query("Spaceships");
  checkQuery.equalTo("token_id",parseInt(id));
  const check = await checkQuery.first({useMasterKey:true});
  if(!check){
	const SpaceshipObj = Moralis.Object.extend("Spaceships");
	const query = new Moralis.Query(SpaceshipObj);
	query.equalTo("token_id",id);
	const results = await query.find({useMasterKey:true});
	if(ethAddress.toUpperCase() == nftOwnerAddress.toUpperCase()){
		//logger.info("nft: "+nftDetail[1]);
		if(results.length == 0){//write new spaceship into database if not exist 
			const Spaceship = new SpaceshipObj();
			Spaceship.set("token_id",parseInt(id));
			Spaceship.set("number",nftDetail.number);
			Spaceship.set("rarity",nftDetail.rarity);
			Spaceship.set("weapon1",nftDetail.weapon1);
			Spaceship.set("weapon2",nftDetail.weapon2);
			Spaceship.set("weapon3",nftDetail.weapon3);
			Spaceship.set("special",nftDetail.special);
			Spaceship.set("image",nftDetail.image);
			Spaceship.set("name",nftDetail.name);
			Spaceship.set("level",1);
			Spaceship.set("health",nftDetail.health);
			Spaceship.set("durability",nftDetail.durability);
			Spaceship.set("durability_max",nftDetail.durability);
			Spaceship.set("power",nftDetail.power);
			Spaceship.set("owner",user);
			Spaceship.set("ethAddress",ethAddress);
			await Spaceship.save(null,{useMasterKey:true});  
			return Spaceship;
		}else{
				if(results[0].get("ethAddress")!=ethAddress){
					results[0].set("ethAddress",ethAddress);
					await results[0].save(null,{useMasterKey:true});
				}
				if(results[0].get("owner")!=user){
					results[0].set("owner",user);
					await results[0].save(null,{useMasterKey:true});
				}
				return results[0];
			}
		}else{
			  
			return false;
		}
	}
});*/

Moralis.Cloud.define("syncUserDetail", async function (request) { 
  const id = request.params.user_id;
  const UserDetailObj = Moralis.Object.extend("Users_Detail");
  const query = new Moralis.Query(UserDetailObj);
  query.equalTo("user_id",id);
  const results = await query.find({useMasterKey:true});
  if(results.length == 0){
    const UserDetail = new UserDetailObj();
    UserDetail.set("user_id",id);
    UserDetail.set("space_credit",0);
    UserDetail.set("energy",maxEnergy);
	UserDetail.set("tax_penalty",taxPenalty);
    UserDetail.set("banned",0);
    await UserDetail.save(null,{useMasterKey:true});  
    return UserDetail;
  }else{
    return results[0];
  }
});

Moralis.Cloud.define("fusion", async function (request) {
	const parent1id = request.params.parent1id;
	const parent2id = request.params.parent2id;
	const to = request.params.ethAddress;

	const parent1query = new Moralis.Query("Spaceships");
	parent1query.equalTo("token_id",parent1id);
	const parent1 = await parent1query.first({useMasterKey:true});
	const parent2query = new Moralis.Query("Spaceships");
	parent2query.equalTo("token_id",parent2id);
	const parent2 = await parent2query.first({useMasterKey:true});

	const breedPrice = await nftContract.methods.breedPrice().call({from:to});
	let finalBreedPrice;

	if(parent1.get("rarity")==1){
		finalBreedPrice = breedPrice*2;
	}else if(parent1.get("rarity")==2){
		finalBreedPrice = breedPrice*3;
	}else if(parent1.get("rarity")==3){
		finalBreedPrice = breedPrice*4;
	}else if(parent1.get("rarity")==4){
		finalBreedPrice = breedPrice*4;
	}

	let Spaceship = {
        image:"",
        name:"",   
		description:"",     
        weapon1:"",
        weapon2:"",
        weapon3:"",
        special:"",
        rarity:0,
        durability:0,
        health:0,
        power:0,
		attributes:[]
	}

	let random = Math.random()*100;
	let child;
	if(parent1.get("rarity") == 1){
		if(random<=90){
			Spaceship.rarity = 2; 				         
		}else{
			Spaceship.rarity = 1;                         
		}                    
	}else if(parent1.get("rarity") == 2){
		if(random<=60){
			Spaceship.rarity = 3;			         
		}else{
			Spaceship.rarity = 2;                             
		}
	}else if(parent1.get("rarity") == 3){
		if(random<=15){
			Spaceship.rarity = 4;  			                      
		}else{
			Spaceship.rarity = 3;
		}
	}else if(parent1.get("rarity") == 4){
		Spaceship.rarity = 4;
	}
	
	random = Math.floor(Math.random()*2);
	if(random == 0){
		child = parent1.get("name");
	}else{
		child = parent2.get("name");
	}   

	Spaceship = await setAttribute(Spaceship,true,child);

	return await mint(to,Spaceship,finalBreedPrice.toString());
	
});

Moralis.Cloud.define("deposit", async function (request) {
	const userAddress = request.params.address;
	const id = request.params.user_id; 
	const gameContract = new web3.eth.Contract(gameAbi, gameAddress);
	const noDeposit = await gameContract.methods.lastDepositEntry(userAddress).call();	
	const LogObj = Moralis.Object.extend("Deposit_Log");
	const logQuery = new Moralis.Query(LogObj);
	logQuery.equalTo("noDeposit",noDeposit);
	const logResult = await logQuery.find({useMasterKey:true});
	if(logResult.length==0){
		const depositEntry = await gameContract.methods.viewDepositData(noDeposit).call();
		const gxgAmount = parseInt(depositEntry[2].toString());
		const gxgSc = gxgAmount*100;

		const query = new Moralis.Query("Users_Detail");
		query.equalTo("user_id",id);
		const results = await query.find({useMasterKey:true});
		if(results.length > 0){
			let sc = parseInt(results[0].get("space_credit").toString());
			let totalBalances = sc+gxgSc;
			logger.info("deposit "+totalBalances);
			results[0].set("space_credit",totalBalances);
			await results[0].save(null,{useMasterKey:true});
			await depositLog(id,gxgAmount,noDeposit);
			return results[0].get("space_credit");
  		}
	}
}); 

async function depositLog(id,gxgAmount,noDeposit) { 
  const LogObj = Moralis.Object.extend("Deposit_Log");
  const Log = new LogObj();
  Log.set("user_id",id);
  Log.set("gxg_amount",gxgAmount);
  Log.set("noDeposit",noDeposit);
  await Log.save(null,{useMasterKey:true});
} 

async function withdraw(id,amount, ethAddress, lootboxid){	

	const WithdrawObj = Moralis.Object.extend("Withdraw_Request");
	const Withdraw = new WithdrawObj();
	Withdraw.set("user_id",id);
	Withdraw.set("amount",amount);
	Withdraw.set("ethAddress",ethAddress);
	Withdraw.set("status","pending");
	Withdraw.set("lootbox_id",lootboxid);
	await Withdraw.save(null,{useMasterKey:true});		
	return Withdraw;
}

Moralis.Cloud.define("selling", async function (request) { 
	const shipId = parseInt(request.params.shipid);
	const userId = request.params.userid;
	let price = parseInt(request.params.price);
	const MpObj = Moralis.Object.extend("Marketplace");
	const query = new Moralis.Query(MpObj);
	query.equalTo("spaceship_id",shipId);
	const result = await query.first();
	if(!result){
		const market = new MpObj();
		market.set("spaceship_id",shipId);
		market.set("user_id",userId);
		market.set("price",price);
		market.set("status","open");
		market.set("type","spaceship");
		await market.save(null,{useMasterKey:true});
	}else{
		result.set("user_id",userId);
		result.set("price",price);
		result.set("status","open");
		await result.save(null,{useMasterKey:true});
	}

	return "sell ship "+shipId+" on marketplace";
}); 

Moralis.Cloud.define("buying", async function (request) { 
	const spaceshipId = parseInt(request.params.ship_id);
	const userId = request.params.user_id;
	const ethAddress = request.params.ethAddress;
	const mpContract = new web3.eth.Contract(mpAbi, mpAddress);
	const isClosed = await mpContract.methods.isClosed(spaceshipId).call({from:ethAddress});
	const mpQuery = new Moralis.Query("Marketplace");
	mpQuery.equalTo("spaceship_id",spaceshipId);
	const onSale = await mpQuery.first({useMasterKey:true});
	if(isClosed==1){
		onSale.set("status","closed");
		await onSale.save(null,{useMasterKey:true});

		const spaceshipQuery = new Moralis.Query("Spaceships");
		spaceshipQuery.equalTo("token_id",spaceshipId);
		const Spaceship = await spaceshipQuery.first({useMasterKey:true});
		Spaceship.set("owner",userId);
		Spaceship.set("ethAddress",ethAddress);
		await Spaceship.save(null,{useMasterKey:true});
	}
});	

Moralis.Cloud.define("buyingSc", async function (request) { 
	const mpid = request.params.mp_id;
	const buyerid = request.params.user_id;
	const ethAddress = request.params.ethAddress;
	const mpContract = new web3.eth.Contract(mpAbi, mpAddress);
	const isClosed = await mpContract.methods.isClosedSc(mpid).call({from:ethAddress});
	const buyerAddress = await mpContract.methods.checkBuyerSc(mpid).call({from:ethAddress});

	if(isClosed==1 && buyerAddress.toUpperCase()==ethAddress.toUpperCase()){
		const mpQuery = new Moralis.Query("Marketplace");
		const onSale = await mpQuery.get(mpid,{useMasterKey:true});
		logger.info('on sale '+onSale);
		let sc_add = parseInt(onSale.get("sc_amount"));
		logger.info('sc add '+sc_add);
		onSale.set("status","closed");
		await onSale.save(null,{useMasterKey:true});
		logger.info("marketplace save");

		
		const query = new Moralis.Query("Users_Detail");
		query.equalTo("user_id",buyerid);
		const results = await query.first({useMasterKey:true});
		let sc = parseInt(results.get("space_credit"));
		logger.info('sc '+sc);
		results.set("space_credit",sc+sc_add);
		await results.save(null,{useMasterKey:true});
		logger.info("ud save");
	}
});

Moralis.Cloud.define("cancelSell", async function (request) { 
	const spaceshipId = parseInt(request.params.ship_id);
	const userId = request.params.user_id;
	const mpQuery = new Moralis.Query("Marketplace");
	mpQuery.equalTo("spaceship_id",spaceshipId);
	mpQuery.equalTo("user_id",userId);
	const onSale = await mpQuery.first({useMasterKey:true});
	if(onSale){
		onSale.set("status","closed");
		await onSale.save(null,{useMasterKey:true});
	}
});

Moralis.Cloud.define("cancelSellSc", async function (request) { 
	const mpId = parseInt(request.params.mp_id);
	const userId = request.params.user_id;
	const mpQuery = new Moralis.Query("Marketplace");
	const onSale = await mpQuery.get(mpId,{useMasterKey:true});
	if(onSale){
		if(onSale.get("user_id")==userId){
			onSale.set("status","closed");
			await onSale.save(null,{useMasterKey:true});

			const UserDetailObj = Moralis.Object.extend("Users_Detail");
			const query = new Moralis.Query(UserDetailObj);
			query.equalTo("user_id",userId);
			const results = await query.first({useMasterKey:true});
			let sc = parseInt(results.get("space_credit"));
			let sc_add = parseInt(onSale.get("sc_amount"));
			results.set("space_credit",sc+sc_add);
			await results.save(null,{useMasterKey:true});
		}
	}
});

Moralis.Cloud.define("startGame", async function (request) { 
	const user_id = request.params.userid;
	const gameMode = request.params.gamemode;
	let energy;
	let activity;
	if(gameMode==1){
		energy = 1;
		activity = "normal mission";
	}else if(gameMode==2){
		energy = 2;
		activity = "challenge mission";
	}
	
	const UserDetailObj = Moralis.Object.extend("Users_Detail");
	const query = new Moralis.Query(UserDetailObj);
	query.equalTo("user_id",user_id);
	const results = await query.first({useMasterKey:true});
	if(results){
		let currentEnergy = parseInt(results.get("energy"));
		logger.info("user energy "+currentEnergy);
		logger.info("require energy "+energy);
		if(currentEnergy>=energy){
			let spaceship_id = results.get("spaceship_selected");
			logger.info("SPACESHIP ID: "+spaceship_id);		
			const spaceship = await getSpaceship(spaceship_id);
			let curDurability = spaceship.get("durability");
			logger.info("DURABILITY: "+curDurability);	
			if(curDurability>0){

				results.set("energy",currentEnergy-energy);
				await results.save(null,{useMasterKey:true});
			
				spaceship.set("durability",curDurability-1);
				await spaceship.save(null,{useMasterKey:true});
				
				const ActivityObj = Moralis.Object.extend("Activity_Log");
				const activitylog = new ActivityObj();
				activitylog.set("user_id",user_id);
				activitylog.set("spaceship_id",spaceship_id);
				activitylog.set("start_at",new Date());
				activitylog.set("activity",activity);
				activitylog.set("energy_used",energy);
				await activitylog.save(null,{useMasterKey:true});

				return activitylog;
			}else{
				return "spaceship need repair";
			}
		}else{
			return "energy empty";
		}
	}else{
		return "user not exist";
	}
});
	
Moralis.Cloud.define("selectShip", async function (request) { 
	const spaceship_id = request.params.spaceshipid;
	const id = request.params.userid;
	const UserDetailObj = Moralis.Object.extend("Users_Detail");
	const query = new Moralis.Query(UserDetailObj);
	query.equalTo("user_id",id);
	const result = await query.first({useMasterKey:true});
	if(result){
		result.set("spaceship_selected",spaceship_id);
		await result.save(null,{useMasterKey:true});
	}
});

Moralis.Cloud.define("endGame", async function (request) { 
	const activity_id = request.params.activityid;
	const id = request.params.userid;
	
	const activityQuery = new Moralis.Query("Activity_Log");
	const activity = await activityQuery.get(activity_id);
	const endDate = new Date();
	activity.set("end_at",endDate);
	const startDate = activity.get("start_at");
	const dif = startDate.getTime()-endDate.getTime();

	var Seconds_from_T1_to_T2 = dif / 1000;
	var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
	activity.set("playtime",Seconds_Between_Dates);

	const ship = await getSpaceship(activity.get("spaceship_id"));
	let rewardAmount = 0;
	let rewardDecrease = (100-(maxLevel-parseInt(ship.get("level"))))/100;
	if(activity.get("activity")=="normal mission"){
		if(ship.get("rarity")==1){
			rewardAmount = normalCommon*rewardDecrease;
		}else if(ship.get("rarity")==2){
			rewardAmount = normalUc*rewardDecrease;
		}else if(ship.get("rarity")==3){
			rewardAmount = normalRare*rewardDecrease;
		}else if(ship.get("rarity")==4){
			rewardAmount = normalLeg*rewardDecrease;
		}
	}else if(activity.get("activity")=="challenge mission"){
		if(ship.get("rarity")==3){
			rewardAmount = challengeRare*rewardDecrease;
		}else if(ship.get("rarity")==4){
			rewardAmount = challengeLeg*rewardDecrease;
		}
	}
	activity.set("reward_amount",rewardAmount);
	await activity.save(null,{useMasterKey:true});
	
	const UserDetailObj = Moralis.Object.extend("Users_Detail");
	const query = new Moralis.Query(UserDetailObj);
	query.equalTo("user_id",id);
	const userDetail = await query.first({useMasterKey:true});

	const balance = parseInt(userDetail.get("space_credit"));
	userDetail.set("space_credit",balance+rewardAmount);
	await userDetail.save(null,{useMasterKey:true});

	return activity;
});

async function getSpaceship(id){
	const shipQuery = new Moralis.Query("Spaceships");
	const ship = await shipQuery.get(id,{useMasterKey:true});
	return ship;
}

Moralis.Cloud.define("repairCost", async function (request) { 
	const rarity = request.params.rarity;
	const durability = request.params.durability;
	let repairCost = 0;
	if(rarity==1){
		repairCost = calculateRepair(normalCommon,durability);
	}else if(rarity==2){
		repairCost = calculateRepair(normalUc,durability);
	}else if(rarity==3){
		repairCost = calculateRepair(challengeRare,durability);
	}else if(rarity==4){
		repairCost = calculateRepair(challengeLeg,durability);
	}
	return repairCost;
});

function calculateRepair(reward, ship_durability){
 	return reward*(ship_durability*0.3);
}

Moralis.Cloud.define("repair", async function (request) { 
	const spaceshipid = request.params.spaceship_id;
	const userid = request.params.user_id;

	const spaceship = await getSpaceship(spaceshipid);
	let repairCost = 0;
	if(spaceship.get("rarity")==1){
		repairCost = calculateRepair(normalCommon,parseInt(spaceship.get("durability")));
	}else if(spaceship.get("rarity")==2){
		repairCost = calculateRepair(normalUc,parseInt(spaceship.get("durability")));
	}else if(spaceship.get("rarity")==3){
		repairCost = calculateRepair(challengeRare,parseInt(spaceship.get("durability")));
	}else if(spaceship.get("rarity")==4){
		repairCost = calculateRepair(challengeLeg,parseInt(spaceship.get("durability")));
	}

	const UserDetailObj = Moralis.Object.extend("Users_Detail");
	const query = new Moralis.Query(UserDetailObj);
	query.equalTo("user_id",userid);
	const userDetail = await query.first({useMasterKey:true});

	const curSC = parseInt(userDetail.get("space_credit"));
	if(curSC>=repairCost){
		spaceship.set("durability",spaceship.get("durability_max"));
		await spaceship.save(null,{useMasterKey:true});
		
		userDetail.set("space_credit",curSC-repairCost);
		await userDetail.save(null,{useMasterKey:true});

		return "Spaceship repaired";
	}else{
		return "Not enough Space Credit";
	}
});

async function resetEnergy(){
	const queryUserDetail = new Moralis.Query("Users_Detail");
	const userDetails = await queryUserDetail.find({useMasterKey:true});
	for(let i=0;i<userDetails.length;i++){
		userDetails[i].set("energy",maxEnergy);
		await userDetails[i].save(null,{useMasterKey:true});
	}
}

Moralis.Cloud.job("energyJob", (request) =>  {
	const { params, headers, log, message } = request;
	message("reset energy");
	return resetEnergy(request);
});

async function normalLootbox(userDetail,ethAddress){
	const userid = userDetail.get("user_id");
	const queryRp = new Moralis.Query("Reward_Pool");
	queryRp.descending("month_no");
	const rewardPool = await queryRp.first({useMasterKey:true});
	if(rewardPool){
		const rpLeft = parseInt(rewardPool.get("rp_left"));

		let reward = "";
		let rewardAmount = 1;
		let random = Math.floor(Math.random()*100);

		const gxgRewardRate = 10;
		const spaceshipRewardRate = 25;
		const gxgChance = [5,15,30];
		const scChance = [5,15,30,45];
		
		if(random <= gxgRewardRate){	
			reward = "gxg";	
			random = Math.floor(Math.random()*100);
			if(random<=gxgChance[0]){	
				rewardAmount = 10000;		
				if(rpLeft<rewardAmount){
					normalLootbox(userDetail,ethAddress);
				}
			}else if(random > [0] && random <= gxgChance[0]+gxgChance[1]){			
				rewardAmount = 50;		
				if(rpLeft<rewardAmount){
					normalLootbox(userDetail,ethAddress);
				}
			}else if(random > gxgChance[0]+gxgChance[1] && random <= gxgChance[0]+gxgChance[1]+gxgChance[2]){			
				rewardAmount = 25;		
				if(rpLeft<rewardAmount){
					normalLootbox(userDetail,ethAddress);
				}
			}else{
				rewardAmount = 10;		
				if(rpLeft<rewardAmount){
					normalLootbox(userDetail,ethAddress);
				}
			}
		}else if(random > gxgRewardRate && random <= (gxgRewardRate+spaceshipRewardRate)){
			reward = "spaceship";
		}else{
			reward = "sc";
			random = Math.floor(Math.random()*100);
			if(random<=scChance[0]){
				rewardAmount = 2000;
			}else if(random > scChance[0] && random <= scChance[0]+scChance[1]){
				rewardAmount = 1500;
			}else if(random > scChance[0]+scChance[1] && random <= scChance[0]+scChance[1]+scChance[2]){
				rewardAmount = 1100;
			}else if(random > scChance[0]+scChance[1]+scChance[2] && random <= scChance[0]+scChance[1]+scChance[2]+scChance[3]){
				rewardAmount = 500;
			}else{
				rewardAmount = 100;
			}
		}
					

		const lootboxLogObj = Moralis.Object.extend("Lootbox_Log");
		const lootbox = new lootboxLogObj();
		lootbox.set("user_id",userid);
		lootbox.set("reward",reward);
		lootbox.set("random",random);
		lootbox.set("amount",rewardAmount);
		await lootbox.save(null,{useMasterKey:true});

		
		if(reward == "spaceship" || reward == "gxg"){
			if(reward == "gxg"){
				rewardPool.set("rp_left",rpLeft-rewardAmount);
				await rewardPool.save(null,{useMasterKey:true});
			}
			await withdraw(userid,rewardAmount,ethAddress,lootbox.id);
		}else if(reward == "sc"){
			curSC = parseInt(userDetail.get("space_credit"));
			userDetail.set("space_credit",curSC+rewardAmount);
			await userDetail.save(null,{useMasterKey:true});
		}
		return [reward,"You got "+rewardAmount+" "+reward];
	}else{
		return ["","Reward Pool Allocation Not Exists"];
	}

	
}

Moralis.Cloud.define("normalLootbox", async function (request) { 
	const userid = request.params.user_id;
	const ethAddress = request.params.ethAddress;
	const UserDetailObj = Moralis.Object.extend("Users_Detail");
	const query = new Moralis.Query(UserDetailObj);
	query.equalTo("user_id",userid);
	const userDetail = await query.first({useMasterKey:true});	

	let curSC = parseInt(userDetail.get("space_credit"));
	if(curSC>=costNormalLootbox){
		userDetail.set("space_credit",curSC-costNormalLootbox);
		await userDetail.save(null,{useMasterKey:true});

		const result = await normalLootbox(userDetail,ethAddress);	
		
		return result;
	}else{
		return "Not enough Space Credit";
	}
});

Moralis.Cloud.define("sellSC", async function (request) { 
	const amount = 500;
	const userid = request.params.user_id;
	const price = parseInt(request.params.price)*10**18;
	const ethAddress = request.params.ethAddress;
	const UserDetailObj = Moralis.Object.extend("Users_Detail");
	const query = new Moralis.Query(UserDetailObj);
	query.equalTo("user_id",userid);
	const userDetail = await query.first({useMasterKey:true});
	let sc = parseInt(userDetail.get("space_credit"));
	if(sc>=amount){
		userDetail.set("space_credit",sc-amount);
		await userDetail.save(null,{useMasterKey:true});
		
		const MpObj = Moralis.Object.extend("Marketplace");
		const market = new MpObj();
		market.set("user_id",userid);
		market.set("price",price);
		market.set("status","open");
		market.set("type","space_credit");
		market.set("sc_amount",amount);
		market.set("ethAddress",ethAddress);
		const result = await market.save(null,{useMasterKey:true});
		return market.id;
	}else{
		return false;
	}
});

Moralis.Cloud.define("getMarketplace", async function (request) { 
		const type = request.params.type;
		const page = request.params.page;
		const skip = (page-1)*itemPerPage;
		const pipeline = [{sort:{price:1}},{skip:skip},{limit:itemPerPage}];
        const mpQuery = new Moralis.Query("Marketplace");
        mpQuery.equalTo("status","open");
        mpQuery.equalTo("type",type);
        return await mpQuery.aggregate(pipeline,{useMasterKey:true}); 
});

Moralis.Cloud.define("getLevelUpCost", async function (request) { 
	const rarity = request.params.rarity;
	if(rarity=="1"){
		return commonLevelUpCost;
	}else if(rarity=="2"){
		return uncommonLevelUpCost;
	}else if(rarity=="3"){
		return rareLevelUpCost;
	}else if(rarity=="4"){
		return legendaryLevelUpCost;
	} 
});

Moralis.Cloud.define("levelUpSpaceship", async function (request) { 
	const userid = request.params.user_id;
	const spaceshipid = request.params.spaceship_id;

	const UserDetailObj = Moralis.Object.extend("Users_Detail");
	const query = new Moralis.Query(UserDetailObj);
	query.equalTo("user_id",userid);
	const userDetail = await query.first({useMasterKey:true});
	let sc = parseInt(userDetail.get("space_credit"));

	const querySpaceship = new Moralis.Query("Spaceships");
	const spaceship = await querySpaceship.get(spaceshipid,{useMasterKey:true});
	let levelupCost = 1000;
	if(spaceship.get("rarity") == "1"){
		levelupCost = commonLevelUpCost;
	}else if(spaceship.get("rarity") == "2"){
		levelupCost = uncommonLevelUpCost;
	}else if(spaceship.get("rarity") == "3"){
		levelupCost = rareLevelUpCost;
	}else if(spaceship.get("rarity") == "4"){
		levelupCost = legendaryLevelUpCost;
	}
	if(sc>=levelupCost){
		
		let level = parseInt(spaceship.get("level"));
		if(level<maxLevel){
			spaceship.set("level",level+1);
			await spaceship.save(null,{useMasterKey:true});

			userDetail.set("space_credit",sc-levelupCost);
			await userDetail.save(null,{useMasterKey:true});

			return "Success";
		}else{
			return "Already max level";
		}
	}else{
		return "Not enough Space Credit";
	}
});

Moralis.Cloud.define("sellSpaceshipToSc", async function (request) { 
	const userid = request.params.user_id;
	const spaceshipid = request.params.spaceship_id;

	const UserDetailObj = Moralis.Object.extend("Users_Detail");
	const query = new Moralis.Query(UserDetailObj);
	query.equalTo("user_id",userid);
	const userDetail = await query.first({useMasterKey:true});
	let sc = parseInt(userDetail.get("space_credit"));

	const querySpaceship = new Moralis.Query("Spaceships");
	const spaceship = await querySpaceship.get(spaceshipid,{useMasterKey:true});
	let scAmount = 0;
	if(spaceship.get("rarity") == "1"){
		scAmount = commonSellSc;
	}else if(spaceship.get("rarity") == "2"){
		scAmount = uncommonSellSc;
	}else if(spaceship.get("rarity") == "3"){
		scAmount = rareSellSc;
	}else if(spaceship.get("rarity") == "4"){
		scAmount = legendarySellSc;
	}
	if(spaceship.get("owner")==userid){
		await spaceship.destroy();
		userDetail.set("space_credit",sc+scAmount);
		await userDetail.save(null,{useMasterKey:true});
		return "success";
	}else{
		return "fail";
	}
});

Moralis.Cloud.define("spaceships", async function (request) { 
	const user_id = request.params.user_id;
	const page = request.params.page;
	const skip = (page-1)*itemPerPage
	const pipeline = [{sort:{token_id:-1}},{skip:skip},{limit:itemPerPage}]
	const query = new Moralis.Query("Spaceships");
	query.equalTo("owner",user_id);
	const spaceships = await query.aggregate(pipeline,{useMasterKey:true});

	return spaceships;
});

Moralis.Cloud.define("rewards", async function (request) { 
	const user_id = request.params.user_id;
	const page = request.params.page;
	const skip = (page-1)*itemPerPage;
	const pipeline = [{sort:{"_created_at":-1}},{skip:skip},{limit:itemPerPage}]
	const queryLootbox = new Moralis.Query("Lootbox_Log");
	queryLootbox.equalTo("user_id",user_id);
	const lootboxs = await queryLootbox.aggregate(pipeline,{useMasterKey:true});
	const resultRewards = [];
	for(let i=0;i<lootboxs.length;i++){
		const queryWd = new Moralis.Query("Withdraw_Request");
		queryWd.equalTo("lootbox_id",lootboxs[i].objectId);
		const resultWd = await queryWd.first({useMasterKey:true});
		resultRewards.push({reward:resultWd,lootbox:lootboxs[i]});
	}
	return resultRewards
});

async function sendingRewards(request){
	const wdQuery = new Moralis.Query("Withdraw_Request");
	wdQuery.equalTo("status","pending");
	const pipeline = {sort:{"_created_at":1}}
	const wdResults = await wdQuery.aggregate(pipeline,{useMasterKey:true});
	if(wdResults.length>0){
		for(let i=0;i<wdResults.length;i++){
			const lootboxQuery = new Moralis.Query("Lootbox_Log");
			const lootbox = await lootboxQuery.get(wdResults[i].lootbox_id,{useMasterKey:true});
			if(lootbox.get("reward")=="gxg"){
				await claimGxg(wdResults[i].ethAddress,wdResults[i].amount,wdResults[i].objectId);
			}else if(lootbox.get("reward")=="spaceship"){
				await claimSpaceship(wdResults[i].ethAddress,wdResults[i].objectId);
			}
		}
	}
}

async function claimGxg(toAddress,amount,wdId){ 
	if(amount==5||amount==10||amount==25||amount==50){
		const amountBig = amount*10**18;

		const BN = web3.utils.BN;
		const transferedAmount = new BN(amountBig.toString());
		
		const query = new Moralis.Query("Utility")	
		const utility = await query.first({useMasterKey:true});
		const adminK = utility.get("private_key");
		const functionCall = tokenContract.methods.transfer(toAddress,transferedAmount.toString()).encodeABI();
		transactionBody = {
			to: tokenAddress,
			data: functionCall,
			gas: 300000,
			gasPrice: web3.utils.toWei("3","gwei")
		};
		const signedTransaction = await web3.eth.accounts.signTransaction(
			transactionBody,
			adminK
		).then(async (signedTx) => {
			const fulfillTx = await web3.eth.sendSignedTransaction(
				signedTx.rawTransaction
			).then(async receipt => {
				const wdQuery = new Moralis.Query("Withdraw_Request");
				const wd = await wdQuery.get(wdId,{useMasterKey:true});
				wd.set("trx_hash",receipt.transactionHash);
				wd.set("status","approved");
				wd.save(null,{useMasterKey:true});
				return true;
			})
			.catch(err => {
				logger.info("err msg send "+err.message);
				return false;
			});;
		}).catch((err) => {
			logger.info("err msg sign "+err.message);
			return false;
		});	
	}
}

async function claimSpaceship(toAddress,wdId){ 

	const randomRarity = Math.floor(Math.random()*100);
	let rarity = 0;
	if(randomRarity<70){
		rarity = 1;
	}else{
		rarity = 2;
	}

	let Spaceship = {
        image:"",
        name:"",   
		description:"",     
        weapon1:"",
        weapon2:"",
        weapon3:"",
        special:"",
        rarity:rarity,
        durability:0,
        health:0,
        power:0,
		attributes:[]
	}

	Spaceship = await setAttribute(Spaceship,false,"");

	const result = await mint(toAddress,Spaceship,"0");

	if(result){
		const wdQuery = new Moralis.Query("Withdraw_Request");
		const wd = await wdQuery.get(wdId,{useMasterKey:true});
		wd.set("trx_hash",result);
		wd.set("status","approved");
		await wd.save(null,{useMasterKey:true});
		logger.info("wd update");
	}

	return result;
	
}

Moralis.Cloud.job("sendingRewards", (request) =>  {
	const { params, headers, log, message } = request;
	message("sending rewards");
	return sendingRewards(request);
});