import { IPFSMode, IPFSOptions } from './cli/options.js'

//import * as IpfsCore from 'ipfs-core'
//import * as IpfsHttp from 'ipfs-http-client'
// import * as IPFSFull from 'ipfs'
//import type {IPFS as IpfsCoreType} from 'ipfs-core-types'

//export type IPFS = IpfsCoreType | IpfsHttp.IPFSHTTPClient;

export type IPFS = any;

export async function create(options: IPFSOptions): Promise<IPFS> {
    if (options.type == IPFSMode.Internal) {
        return await require('ipfs-core').create();
    }
    return require('ipfs-http-client').create({url: options.url});
}