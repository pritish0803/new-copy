//  the address of the smart contract

var contractAddress = '0xc2787ebf6db019adbad45c439f8b81427bd7fadd';

//   Abstract Binary Interface of the contract code

var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "ethAcc",
				"type": "address"
			}
		],
		"name": "getBankName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			}
		],
		"name": "viewCustomer",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			},
			{
				"name": "bankAddress",
				"type": "address"
			}
		],
		"name": "ifAllowed",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			},
			{
				"name": "DataHash",
				"type": "string"
			}
		],
		"name": "addCustomer",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			},
			{
				"name": "bankAddress",
				"type": "address"
			},
			{
				"name": "ifallowed",
				"type": "bool"
			}
		],
		"name": "allowBank",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "checkCustomer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "ethAcc",
				"type": "address"
			}
		],
		"name": "getBankKYC",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getRequestLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "uname",
				"type": "string"
			}
		],
		"name": "getBankEth",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "bankAddress",
				"type": "address"
			},
			{
				"name": "ifAdded",
				"type": "bool"
			}
		],
		"name": "updateRating",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			},
			{
				"name": "bankAddress",
				"type": "address"
			}
		],
		"name": "addRequest",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			}
		],
		"name": "getCustomerRating",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "eth",
				"type": "address"
			}
		],
		"name": "removeBank",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "ethAcc",
				"type": "address"
			}
		],
		"name": "getBankReg",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "ethAcc",
				"type": "address"
			}
		],
		"name": "getBankRating",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			},
			{
				"name": "ifIncrease",
				"type": "bool"
			}
		],
		"name": "updateRatingCustomer",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			},
			{
				"name": "password",
				"type": "address"
			}
		],
		"name": "checkBank",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			},
			{
				"name": "ind",
				"type": "uint256"
			}
		],
		"name": "getBankRequests",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "setPassword",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "uname",
				"type": "string"
			},
			{
				"name": "eth",
				"type": "address"
			},
			{
				"name": "regNum",
				"type": "string"
			}
		],
		"name": "addBank",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "isPartOfOrg",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			}
		],
		"name": "getCustomerBankRating",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			},
			{
				"name": "DataHash",
				"type": "string"
			}
		],
		"name": "modifyCustomer",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			}
		],
		"name": "getCustomerBankName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			}
		],
		"name": "removeCustomer",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	}
];

//  binary information of the code

var binaryData = '608060405234801561001057600080fd5b5061345e806100206000396000f300608060405260043610610149576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301da7b311461014e578063107925bb146101fd5780631cfb7c9a146102d25780633190abc01461036657806339b83b681461041c5780634b726f61146104a45780634ec2b4171461055e57806353bf1de0146105a85780635b3de1c8146105d35780637d2f42c31461066f5780638873704c146106c55780638eafe0f0146107415780639649650c146107b15780639ac3fce6146107fb578063b8144a72146108aa578063bbd4edb1146108f4578063c17d872014610970578063c71029e114610a65578063ca38649614610b0b578063ccfa8e7114610bc5578063d06760da14610c9b578063e979bac114610cbd578063f72860ca14610d2d578063f9dc079314610de3578063fc55ea9d14610eb8575b600080fd5b610182600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f28565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101c25780820151818401526020810190506101a7565b50505050905090810190601f1680156101ef5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610257600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506110bb565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561029757808201518184015260208101905061027c565b50505050905090810190601f1680156102c45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61034c600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611254565b604051808215151515815260200191505060405180910390f35b610406600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611364565b6040518082815260200191505060405180910390f35b6104a2600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080351515906020019092919050505061156b565b005b610544600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506117b2565b604051808215151515815260200191505060405180910390f35b610592600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061187d565b6040518082815260200191505060405180910390f35b3480156105b457600080fd5b506105bd611944565b6040518082815260200191505060405180910390f35b61062d600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611951565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6106af600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611a05565b6040518082815260200191505060405180910390f35b61073f600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c42565b005b61079b600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611e06565b6040518082815260200191505060405180910390f35b6107e5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611e87565b6040518082815260200191505060405180910390f35b61082f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612088565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561086f578082015181840152602081019050610854565b50505050905090810190601f16801561089c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6108de600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061221b565b6040518082815260200191505060405180910390f35b61095a600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192908035151590602001909291905050506122e2565b6040518082815260200191505060405180910390f35b6109ea600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612509565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610a2a578082015181840152602081019050610a0f565b50505050905090810190601f168015610a575780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610ac9600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192908035906020019092919050505061264b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610bab600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061274b565b604051808215151515815260200191505060405180910390f35b610c85600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050612849565b6040518082815260200191505060405180910390f35b610ca361298c565b604051808215151515815260200191505060405180910390f35b610d17600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050612a32565b6040518082815260200191505060405180910390f35b610dcd600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050612ad7565b6040518082815260200191505060405180910390f35b610e3d600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050612be5565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610e7d578082015181840152602081019050610e62565b50505050905090810190601f168015610eaa5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610f12600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050612c8a565b6040518082815260200191505060405180910390f35b606060008090505b60018054905081101561107c578273ffffffffffffffffffffffffffffffffffffffff16600182815481101515610f6357fe5b906000526020600020906005020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561107157600181815481101515610fc057fe5b90600052602060002090600502016000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110655780601f1061103a57610100808354040283529160200191611065565b820191906000526020600020905b81548152906001019060200180831161104857829003601f168201915b505050505091506110b5565b806001019050610f30565b6040805190810160405280600481526020017f6e756c6c0000000000000000000000000000000000000000000000000000000081525091505b50919050565b606060006110c761298c565b151561110a576040805190810160405280600e81526020017f4163636573732064656e69656421000000000000000000000000000000000000815250915061124e565b600090505b6000805490508110156112155761114560008281548110151561112e57fe5b906000526020600020906006020160000184612ebf565b1561120a5760008181548110151561115957fe5b90600052602060002090600602016001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111fe5780601f106111d3576101008083540402835291602001916111fe565b820191906000526020600020905b8154815290600101906020018083116111e157829003601f168201915b5050505050915061124e565b80600101905061110f565b6040805190810160405280601f81526020017f437573746f6d6572206e6f7420666f756e6420696e206461746162617365210081525091505b50919050565b600080600090505b6002805490508110156113585761129260028281548110151561127b57fe5b906000526020600020906002020160000185612ebf565b801561130957508273ffffffffffffffffffffffffffffffffffffffff166002828154811015156112bf57fe5b906000526020600020906002020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b801561133f575060028181548110151561131f57fe5b906000526020600020906002020160010160149054906101000a900460ff165b1561134d576001915061135d565b80600101905061125c565b600091505b5092915050565b60008061136f61298c565b151561137e5760079150611564565b600090505b6000805490508110156113d2576113b96000828154811015156113a257fe5b906000526020600020906006020160000185612ebf565b156113c75760029150611564565b806001019050611383565b600080548091906001016113e69190613042565b50600160008054905010156113fe5760019150611564565b60c06040519081016040528085815260200184815260200160648152602001600081526020013373ffffffffffffffffffffffffffffffffffffffff1681526020016040805190810160405280600481526020017f6e756c6c00000000000000000000000000000000000000000000000000000000815250815250600060016000805490500381548110151561149057fe5b906000526020600020906006020160008201518160000190805190602001906114ba929190613074565b5060208201518160010190805190602001906114d7929190613074565b50604082015181600201556060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a082015181600501908051906020019061154f929190613074565b5090505061155e336001611a05565b50600091505b5092915050565b600080600091505b6002805490508210156117aa576115a960028381548110151561159257fe5b906000526020600020906002020160000186612ebf565b801561162057508373ffffffffffffffffffffffffffffffffffffffff166002838154811015156115d657fe5b906000526020600020906002020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b1561179f57821561166957600160028381548110151561163c57fe5b906000526020600020906002020160010160146101000a81548160ff02191690831515021790555061179a565b8190505b60028080549050038110156117835760026001830181548110151561168e57fe5b90600052602060002090600202016002838154811015156116ab57fe5b9060005260206000209060020201600082018160000190805460018160011615610100020316600290046116e09291906130f4565b506001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820160149054906101000a900460ff168160010160146101000a81548160ff02191690831515021790555090505080600101905061166d565b6002805480919060019003611798919061317b565b505b6117ab565b816001019150611573565b5b5050505050565b600080600090505b600080549050811015611871576117f06000828154811015156117d957fe5b906000526020600020906006020160000185612ebf565b8015611821575061182060008281548110151561180957fe5b906000526020600020906006020160050184612ebf565b5b1561182f5760019150611876565b61185860008281548110151561184157fe5b906000526020600020906006020160000185612ebf565b156118665760009150611876565b8060010190506117ba565b600091505b5092915050565b600080600090505b600180549050811015611939578273ffffffffffffffffffffffffffffffffffffffff166001828154811015156118b857fe5b906000526020600020906005020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561192e5760018181548110151561191557fe5b906000526020600020906005020160030154915061193e565b806001019050611885565b600091505b50919050565b6000600280549050905090565b600080600090505b6001805490508110156119e75761198f60018281548110151561197857fe5b906000526020600020906005020160000184612ebf565b156119dc576001818154811015156119a357fe5b906000526020600020906005020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691506119ff565b806001019050611959565b7314e041521a40e32ed88b22c0f32469f5406d757a91505b50919050565b600080600090505b600180549050811015611c36578373ffffffffffffffffffffffffffffffffffffffff16600182815481101515611a4057fe5b906000526020600020906005020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611c2b578215611b7557600181815481101515611aa357fe5b906000526020600020906005020160030160008154809291906001019190505550600181815481101515611ad357fe5b9060005260206000209060050201600301546064811515611af057fe5b04600182815481101515611b0057fe5b9060005260206000209060050201600201600082825401925050819055506101f4600182815481101515611b3057fe5b9060005260206000209060050201600201541115611b70576101f4600182815481101515611b5a57fe5b9060005260206000209060050201600201819055505b611c22565b60018082815481101515611b8557fe5b906000526020600020906005020160030154016064811515611ba357fe5b04600182815481101515611bb357fe5b9060005260206000209060050201600201600082825403925050819055506000600182815481101515611be257fe5b9060005260206000209060050201600201541015611c21576000600182815481101515611c0b57fe5b9060005260206000209060050201600201819055505b5b60009150611c3b565b806001019050611a0d565b600191505b5092915050565b60008090505b600280549050811015611d0a57611c7e600282815481101515611c6757fe5b906000526020600020906002020160000184612ebf565b8015611cf557508173ffffffffffffffffffffffffffffffffffffffff16600282815481101515611cab57fe5b906000526020600020906002020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b15611cff57611e01565b806001019050611c48565b60028054809190600101611d1e919061317b565b506060604051908101604052808481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001600015158152506002600160028054905003815481101515611d6b57fe5b90600052602060002090600202016000820151816000019080519060200190611d95929190613074565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010160146101000a81548160ff0219169083151502179055509050505b505050565b600080600090505b600080549050811015611e7c57611e44600082815481101515611e2d57fe5b906000526020600020906006020160000184612ebf565b15611e7157600081815481101515611e5857fe5b9060005260206000209060060201600201549150611e81565b806001019050611e0e565b600091505b50919050565b6000806000611e9461298c565b1515611ea35760079250612081565b600091505b60018054905082101561207c578373ffffffffffffffffffffffffffffffffffffffff16600183815481101515611edb57fe5b906000526020600020906005020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415612071576001820190505b60018054905081101561205257600182815481101515611f4c57fe5b90600052602060002090600502016001808403815481101515611f6b57fe5b906000526020600020906005020160008201816000019080546001816001161561010002031660029004611fa09291906130f4565b506001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506002820154816002015560038201548160030155600482018160040190805460018160011615610100020316600290046120439291906130f4565b50905050806001019050611f30565b600180548091906001900361206791906131ad565b5060009250612081565b816001019150611ea8565b600192505b5050919050565b606060008090505b6001805490508110156121dc578273ffffffffffffffffffffffffffffffffffffffff166001828154811015156120c357fe5b906000526020600020906005020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156121d15760018181548110151561212057fe5b90600052602060002090600502016004018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156121c55780601f1061219a576101008083540402835291602001916121c5565b820191906000526020600020905b8154815290600101906020018083116121a857829003601f168201915b50505050509150612215565b806001019050612090565b6040805190810160405280600481526020017f6e756c6c0000000000000000000000000000000000000000000000000000000081525091505b50919050565b600080600090505b6001805490508110156122d7578273ffffffffffffffffffffffffffffffffffffffff1660018281548110151561225657fe5b906000526020600020906005020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156122cc576001818154811015156122b357fe5b90600052602060002090600502016002015491506122dc565b806001019050612223565b600091505b50919050565b600080600090505b6000805490508110156124fd5761232060008281548110151561230957fe5b906000526020600020906006020160000185612ebf565b156124f257821561240c5760008181548110151561233a57fe5b90600052602060002090600602016003016000815480929190600101919050555060008181548110151561236a57fe5b906000526020600020906006020160030154606481151561238757fe5b0460008281548110151561239757fe5b9060005260206000209060060201600201600082825401925050819055506101f46000828154811015156123c757fe5b9060005260206000209060060201600201541115612407576101f46000828154811015156123f157fe5b9060005260206000209060060201600201819055505b6124e9565b60008181548110151561241b57fe5b90600052602060002090600602016003016000815480929190600190039190505550600160008281548110151561244e57fe5b90600052602060002090600602016003015401606481151561246c57fe5b0460008281548110151561247c57fe5b906000526020600020906006020160020160008282540392505081905550600080828154811015156124aa57fe5b90600052602060002090600602016002015410156124e857600080828154811015156124d257fe5b9060005260206000209060060201600201819055505b5b60009150612502565b8060010190506122ea565b600191505b5092915050565b606060008090505b60018054905081101561260b578273ffffffffffffffffffffffffffffffffffffffff1660018281548110151561254457fe5b906000526020600020906005020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480156125be57506125bd6001828154811015156125a657fe5b906000526020600020906005020160000185612ebf565b5b15612600576040805190810160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509150612644565b806001019050612511565b6040805190810160405280600481526020017f6e756c6c0000000000000000000000000000000000000000000000000000000081525091505b5092915050565b6000806000809150600090505b60028054905081101561272b5761268e60028281548110151561267757fe5b906000526020600020906002020160000186612ebf565b80156126cb5750600015156002828154811015156126a857fe5b906000526020600020906002020160010160149054906101000a900460ff161515145b15612718576002818154811015156126df57fe5b906000526020600020906002020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169250612743565b8180600101925050806001019050612658565b7314e041521a40e32ed88b22c0f32469f5406d757a92505b505092915050565b600080600090505b60008054905081101561283d5761278960008281548110151561277257fe5b906000526020600020906006020160000185612ebf565b80156127ef57506127ee6000828154811015156127a257fe5b90600052602060002090600602016005016040805190810160405280600481526020017f6e756c6c00000000000000000000000000000000000000000000000000000000815250612ebf565b5b15612832578260008281548110151561280457fe5b906000526020600020906006020160050190805190602001906128289291906131df565b5060019150612842565b806001019050612753565b600091505b5092915050565b6000806001805490501480612862575061286161298c565b5b15612980576001805480919060010161287b91906131ad565b5060a0604051908101604052808581526020018473ffffffffffffffffffffffffffffffffffffffff16815260200160c8815260200160008152602001838152506001808080549050038154811015156128d157fe5b906000526020600020906005020160008201518160000190805190602001906128fb929190613074565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004019080519060200190612973929190613074565b5090505060009050612985565b600790505b9392505050565b600080600090505b600180549050811015612a29573373ffffffffffffffffffffffffffffffffffffffff166001828154811015156129c757fe5b906000526020600020906005020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415612a1e5760019150612a2e565b806001019050612994565b600091505b5090565b600080600090505b600080549050811015612ad057612a70600082815481101515612a5957fe5b906000526020600020906006020160000184612ebf565b15612ac557612abe600082815481101515612a8757fe5b906000526020600020906006020160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661221b565b9150612ad1565b806001019050612a3a565b5b50919050565b600080612ae261298c565b1515612af15760079150612bde565b600090505b600080549050811015612bd957612b2c600082815481101515612b1557fe5b906000526020600020906006020160000185612ebf565b15612bce5782600082815481101515612b4157fe5b90600052602060002090600602016001019080519060200190612b659291906131df565b5033600082815481101515612b7657fe5b906000526020600020906006020160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060009150612bde565b806001019050612af6565b600191505b5092915050565b606060008090505b600080549050811015612c8357612c23600082815481101515612c0c57fe5b906000526020600020906006020160000184612ebf565b15612c7857612c71600082815481101515612c3a57fe5b906000526020600020906006020160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610f28565b9150612c84565b806001019050612bed565b5b50919050565b600080600080612c9861298c565b1515612ca75760079350612eb7565b600092505b600080549050831015612eb257612ce2600084815481101515612ccb57fe5b906000526020600020906006020160000186612ebf565b15612ea757600083815481101515612cf657fe5b906000526020600020906006020160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691506001830190505b600080549050811015612e7c57600083815481101515612d4d57fe5b9060005260206000209060060201600060018503815481101515612d6d57fe5b906000526020600020906006020160008201816000019080546001816001161561010002031660029004612da29291906130f4565b5060018201816001019080546001816001161561010002031660029004612dca9291906130f4565b5060028201548160020155600382015481600301556004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060058201816005019080546001816001161561010002031660029004612e6d9291906130f4565b50905050806001019050612d31565b6000805480919060019003612e919190613042565b50612e9d826000611a05565b5060009350612eb7565b826001019250612cac565b600193505b505050919050565b60008060606000859250849150815183805460018160011615610100020316600290049050141515612ef45760009350613039565b600090505b82805460018160011615610100020316600290049050811015613034578181815181101515612f2457fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191683828154600181600116156101000203166002900481101515612fb057fe5b815460011615612fcf5790600052602060002090602091828204019190065b9054901a7f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415156130275760009350613039565b8080600101915050612ef9565b600193505b50505092915050565b81548183558181111561306f5760060281600602836000526020600020918201910161306e919061325f565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106130b557805160ff19168380011785556130e3565b828001600101855582156130e3579182015b828111156130e25782518255916020019190600101906130c7565b5b5090506130f091906132e5565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061312d578054855561316a565b8280016001018555821561316a57600052602060002091601f016020900482015b8281111561316957825482559160010191906001019061314e565b5b50905061317791906132e5565b5090565b8154818355818111156131a8576002028160020283600052602060002091820191016131a7919061330a565b5b505050565b8154818355818111156131da576005028160050283600052602060002091820191016131d99190613374565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061322057805160ff191683800117855561324e565b8280016001018555821561324e579182015b8281111561324d578251825591602001919060010190613232565b5b50905061325b91906132e5565b5090565b6132e291905b808211156132de576000808201600061327e91906133ea565b60018201600061328e91906133ea565b600282016000905560038201600090556004820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556005820160006132d591906133ea565b50600601613265565b5090565b90565b61330791905b808211156133035760008160009055506001016132eb565b5090565b90565b61337191905b8082111561336d576000808201600061332991906133ea565b6001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160146101000a81549060ff021916905550600201613310565b5090565b90565b6133e791905b808211156133e3576000808201600061339391906133ea565b6001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600282016000905560038201600090556004820160006133da91906133ea565b5060050161337a565b5090565b90565b50805460018160011615610100020316600290046000825580601f10613410575061342f565b601f01602090049060005260206000209081019061342e91906132e5565b5b505600a165627a7a72305820932cf3f9bad140b8ee005b110050f351b732dc1eb105b36d54939a5009a6880d0029';

//  IDs of all elements of the KYC form

var allIds = [

    "username",
    "first_name",
    "middle_name",
    "last_name",
    "occupation",
    "income_range",
    "DOB",
    "gender_m",
    "gender_f",
    "address",
    "phone_1",
    "phone_2",
    "email",
    "country_res"

];
