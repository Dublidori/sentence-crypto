import { ethers } from 'ethers';
import { useAccount, useContract, useProvider, useSigner } from 'wagmi';
// import MyContractABI from '../path/to/MyContractABI.json'; // Adjust the path as needed

const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your smart contract's address

export const useWeb3Provider = () => {
    const { address } = useAccount();
    const provider = useProvider();
    const { data: signer } = useSigner();

    const contract = useContract({
        addressOrName: contractAddress,
        // contractInterface: MyContractABI,
        signerOrProvider: signer || provider,
    });

    const getAccountStatus = async () => {
        if (!address) {
            return 'Please connect to MetaMask.';
        }
        // Additional account status checks can go here (e.g., balance check)
        return 'Connected';
    };

    const handlePayment = async (sentence, amount) => {
        if (!address) {
            throw new Error('Please connect to MetaMask.');
        }

        try {
            const transaction = await contract.YOUR_CONTRACT_METHOD(sentence, {
                value: ethers.utils.parseEther(amount),
            });

            await transaction.wait();
            console.log('Transaction successful:', transaction);
            return transaction;
        } catch (error) {
            console.error('Transaction failed:', error);
            throw error;
        }
    };

    return {
        getAccountStatus,
        handlePayment,
    };
};
