# Epochz

Epochz is a blockchain-based platform for sharing and distributing open-source machine learning models and datasets. It utilizes Filecoin and IPFS for decentralized storage, and zkEVM smart contracts on Scroll for buying and publishing models.

## Overview

The goal of Epochz is to facilitate the sharing of open-source ML models and datasets using the power of blockchain technology.

Key features:

- Decentralized storage using Filecoin/IPFS - ensures availability and prevents censorship
- Scroll zkEVM smart contracts for buying and publishing models and datasets
- Encourages sharing of open-source models/data for students, researchers, startups, etc.
- Transparent and secure transactions on the blockchain network

## Technology

Epochz uses the following key technologies:

- *Filecoin & IPFS* - For decentralized, redundant storage of model and dataset files
- *Scroll* - For zkEVM smart contracts that handle payments and access control
- *JavaScript* - For building the front-end and back-end components

## Smart Contracts

The core smart contracts are are deployed in the collowing networks:
1. Scroll sepolia test network - Deployed contract address 0x545506D72a7F3427dD94aB92a3E07b4c8972cb72
                               - Link -> https://sepolia.scrollscan.dev/address/0x545506D72a7F3427dD94aB92a3E07b4c8972cb72

![image](https://github.com/Dan-Arnin/ETHIN2023/assets/54409830/851e1c3c-affc-461c-a23d-e73c6d0bc127)


- *ModelRegistry* - Registry of models, metadata, ownership, etc.
- *DatasetRegistry* - Registry of datasets, metadata, ownership, etc.
- *Purchase* - Handles payment and access control for purchases

## Getting Started

To run Epochz locally:

1. Clone the repo
2. Install dependencies
3. Run the express server
4. Run migrations to deploy contracts
5. Open the index.html to run the application
