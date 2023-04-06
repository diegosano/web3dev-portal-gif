import fs from 'node:fs';
import anchor from '@project-serum/anchor';

const account = anchor.web3.Keypair.generate();

fs.writeFileSync('./keypair.json', JSON.stringify(account));
