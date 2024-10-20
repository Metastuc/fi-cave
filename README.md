# Medical Records Archive


# FiCave

> ## Table of Contents
- [Project Details](#project-description)
- [Problem Statement](#problem-statement)
- [Solution](#solution)
- [How it Works](#how-it-works)
- [Technologies Used](#technologies-used)
    - [Base Chain](#base-chain)
    - [Base OnchainKit Kit](#base-onchainkit)
    - [PinataSDK/IPFS](#pinatasdkipfs)
    - [Smart Contract](#solidity-smart-contracts)
    - [Backend Server/Api](#backend-serverapipython-flask)
- [Important Live Links](#importantlive-hosted-project-links)
- [Team Members](#contributors)
- [Project Features](#project-features)
- [Why FiCave](#why-ficave)
- [Features We Couldn't Complete](#features-we-couldnt-complete)
- [Future Project Plans](#future-project-plans)


#
> ## Project Description

<p><b style="color:orange">Ficave is a decentralised medical documentation system,built on Fantom network.

Ficave is the first medical ledger on the blockchain,which makes it easy to upload,send,receive,and acess medical data’s on chain .
</b> Files stored on Ficave are immutable and can’t be accessed without user  permission or password,confidential medical data can also be stored in private folders. 

<b style="color:orange">FiCave</b> Dapp is free and easy to use,conveniently upload,encrypt and share your medical files with your doctor or consultant. 
Files uploaded on Ficave can also be made open-source to serve as  research material in the medical dataset,enabling on chain peer-to-peer medical database. 
</p>

#
## Important/Live Hosted Project Links
- **Hosted URL** > [https://ficave.on-fleek.app/](https://ficave.on-fleek.app/)

- **Github** > [https://github.com/Metastuc/fi-cave](https://github.com/Metastuc/fi-cave)

- **Contract** > 
   - Base [0xF281Afb262bA65fbD9d4BCfb2539aF1D064231ca](https://sepolia.basescan.org/address/0xF281Afb262bA65fbD9d4BCfb2539aF1D064231ca)

    - Contract Code [here](https://github.com/Metastuc/fi-cave/blob/main/contracts/MedArchive.sol)

    - Contract details [here](#solidity-smart-contracts)

- **Backend Server/Api** > [see here](#backend-serverapipython-flask)

#
> ## Problem Statement

Ficave seeks a usecase that eliminates traditional file system in health organisation’s,Hospitals and clinics and makes data sharing more <b style="color:orange">secure, through encryption</b>, accessible  and safe . 

Files stored on Ficave must be immutable and can’t be accessed without user/hospital's  permission or password,confidential medical datas must be confidential and also be stored in private folders.

Our mission is to make medical records and data more  accessible and safe using the blockchain technology,we envision to build Ficave to stand out as the <b style="color:orange">biggest medical archive</b> for research and documentations,and to eliminate the problem of medical data loss due to physical disasters or tamper. 

[see solution here](#solution)

#
> ## How it works
***Note:*** <b style="color:orange">All patients and their records are tied to each hospitals account or wallet address.</b>

hospitals create or adds a patient using their name and that patient is issued a patient Id with which records can be added.

<b style="color:orange">When uploading a Medical record</b> the details are provided and a picture of the record uploaded, before clicking the upload button the hospital provides their password, after this the details are uploaded to Ipfs and a hash is returned, <b style="color:red">This Hash</b> is then sent to our server where it is encrypted with the hospitals' password using fernet encryption, after encrypting, the result or fernet hash is returned and this is stored on the Fi-Cave smart contract and mapped to the hospitals' address.This makes it secure and impossible for one to see private patient records by querying the contracts storage slots as what is returned are incomprehensible.

<b style="color:orange">To view or get patients records</b>, the Id of the patient and the hospitals password is provided, this gets all the records for that patient from the contract and then sends a list or array of all the fernet hashes stored on the contract to our server, our sever then uses the password to decrypt all the members of the list. the server then returns a list or aray of the decrypted hashes which are the actual Ipfs hash or CID , this is collected and rendered on our frontend for the user or Hospital to see and interact with.



#
> ## Contributors

- Godhanded(Blockchain && Backend Dev)
    - [Twitter, @Godand](https://twitter.com/Godand_)
    - [Github, @Godhanded](https://github.com/Godhanded) <br>
- Miraclemenikelechi(Front-End dev)
    - [Twitter, @trinityandtruth](https://twitter.com/trinityandtruth?s=20&t=ZIj6s8ImLoDYIqEpV-qfKw)
    - [Github, @miraclemenikelechi](https://github.com/miraclemenikelechi)<br>
- Nuelvations(Product Manager)
    - [Twitter, @defiprince_](https://twitter.com/defiprince_)
    - [Github, @nuelvations](https://github.com/nuelvations) <br>

#
> ## Technologies Used

 | <b><u>Stack</u></b> | <b><u>Usage Summary</u></b> |
 | :------------------ | :------------------------- |
 | **`PinataSDK/IPFS`**| file upload/retrieval  |
 | **`Base OnChainKit`**       | Base smart wallet, smart contract calls, transactions       |
 | **`Base chain`** | Main contract deployed/Tracks all records|
 | **`Solidity`**      | Smart contract             |
 | **`React`**         | Frontend                   |
 | **`Python Flask`**| Encrypt/Decrypt uploaded Records for contract to store|

- ### **Solidity smart contracts**
    ficavee makes use of a smart contracts see [contract](https://github.com/Metastuc/fi-cave/tree/main/contracts)
    - **MedArchive** The main or home contract through which tracks all hospitals and their respective patients.
    - <b style="color: orange">It also records in encrypted format using the hospitals passwordthe medical data of all patints</b>

- ### **Backend Server/Api**_**Python Flask**
    - <b style="color: orange">The Api or server</b>, we created performs two functions, encrypt the ipfs cid returned after a file is uploaded and return the encryption which makes use of <b style="color:orange">Fernet Encryption Methods and User defined password</b> to store in our smart contract. [code here](https://github.com/Metastuc/fi-cave/blob/main/Backend/securor/__init__.py#L51) and [here](https://github.com/Metastuc/fi-cave/blob/main/Backend/securor/__init__.py#L41)

    - Decrypt a list of Fernet hashes and return the Cids of the decrypted hashes to render on our frontend [see here](https://github.com/Metastuc/fi-cave/blob/main/Backend/securor/__init__.py#L57)

    - See Backend Documentation [here](https://github.com/Metastuc/fi-cave/blob/main/Backend/README.md)

- ### **PinataSDK/IPFS**
    - We used the PinataSDK npm packed to interact and upload files to ipfs[see here](https://github.com/Metastuc/fi-cave/blob/5c67929ada19814bb2a21a1d9dec35dd2a6ea054/frontend_fi/src/components/upload/Upload.jsx#L102) 


- ### **Base Chain**
    - The contract was <b style="color: orange">deployed on</b> this chain 


- ### **Base OnChainKit**
    - <b style="color: orange">The Base OnChainkit</b>  was used to handle our base smart wallet, contract interaction and transaction functions.
    see [Contract here](https://github.com/Metastuc/fi-cave/blob/main/frontend_fi/src/components/upload/Upload.jsx#L185)


#
> ## Solution
<p>FiCave has built as system where Hospitals Private and public can upload and store medical records unique to each hospital and most expecially private as all records are encrypted or hashed using Fernet encryption and a password provided by each user and this is stored in the smart contrct permanently.
Ficave also also fosters research monetixation by allowing users or hospitals to publish medical write ups or research papers for sale at a price specified by said entity.</p>
<p><b style="color: orange">
In the nearest of time,doctors or researchers</b> can co-work and share resource data on-chain while working remote using Ficave dapp,and also users can earn incentives from their open source records/data using the Ficave archive by encrypting medical data and setting acess price for people to be able to have acess or ownership to such data.
</p>


<p><b style="color:orange">Through Ficave - </b>
In the nearest of time,doctors or researchers can co-work and share resource data securely on-chain while working remote using Ficave dapp,and also users can earn incentives from their open source records/data using the Ficave archive by encrypting medical data and setting access price for people to be able to have acess or ownership to such data. 
</p>


#
> ## Why FiCave - 
<p><b style="color:orange">Ficave usecase</b>Ficave usecase eliminates traditional file system in health organisation’s,Hospitals and clinics and makes data sharing more accessible and safe . 
Files stored on Ficave are immutable and can’t be accessed without user  permission or password,confidential medical datas can also be stored in private folders. 
Ficave Dapp is free and easy to use,conveniently upload and share your medical files with your doctor or consultant. 
Files uploaded on Ficave can also be made open-source to serve as  research material in the medical dataset,enabling on chain peer-to-peer medical database. 
</p>

#
## Project features
- Registration of patients
- uploading Medical records or data
- encrypting Records or data with user provided password
- storing the encryption on chain
- retrieving and decrypting medical records withh user provided password
- Archive for sale of Medical research papers


#
## Features we couldn't complete
- we could not finish archive for selling research papers
    >we wanted to immediately build an avenue or sorce through which any medical practitioner can make money of their medical research or findings and selling it directly to other practitioners around the world, unfortunately we coulnt complete it,we lacked time and resources to biuld and thoroughly test it <b style="color:orange">Thankfully we are still on our toes building it</b>

#
## Future Project Plans
We plan to push this project further after the hackathon, and integrate some features we weren’t able to complete. 
- <b style="color:orange">Firstly</b> Our mission is to make medical records and data more  accessible and safe using the blockchain technology,we envision to build Ficave to stand out as the biggest medical archive for research and documentations,and to eliminate the problem of <b style="color:orange">medical data loss due to physical disasters or tamper.</b>
.</b>
- <b style="color:orange">Improved Analytics to track and provide easily data concerning all records, patients and Hospitals</b>