import { useAccount, useWriteContract } from 'wagmi';
import { parseEther } from 'viem'
import BitphraseABI from './BitphraseABI.json'; // Adjust the path as needed

const contractAddress = '0x85a2b7609Fc92181a2A5fb565D2895B5a1D7835C'; // Replace with your smart contract's address

export const useWeb3Provider = () => {
    const { writeContract } = useWriteContract()
    const { address } = useAccount();

    const getAccountStatus = async () => {
        if (!address) {
            return 'Please connect to MetaMask.';
        }
        // Additional account status checks can go here (e.g., balance check)
        return 'Connected';
    };

    const handlePayment = async (amount, quote) => {
        console.log('here')
        if (!address) {
            throw new Error('Please connect to MetaMask.');
        }

        try {
            writeContract({
                addressOrName: contractAddress,
                contractInterface: BitphraseABI,
                functionName: 'bid',
                args: [
                    quote
                ],
                value: parseEther(amount)
            })

            // const transaction = await contract.bid(quote, {
            //     value: ethers.utils.parseEther(bid),
            // });

            // await transaction.wait();
            // console.log('Transaction successful:', transaction);
            return true;
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
