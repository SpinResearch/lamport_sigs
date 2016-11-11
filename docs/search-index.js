var searchIndex = {};
searchIndex["lamport"] = {"doc":"*lamport* implements one-time hash-based signatures using the Lamport signature scheme.","items":[[3,"PublicKey","lamport","A one-time signing public key",null,null],[3,"PrivateKey","","A one-time signing private key",null,null],[11,"verify_signature","","Verifies that the signature of the data is correctly signed with the given key",0,null],[11,"new","","Generates a new random one-time signing key. This method can panic if OS RNG fails",1,{"inputs":[{"name":"t"}],"output":{"name":"privatekey"}}],[11,"public_key","","Returns the public key associated with this private key",1,null],[11,"sign","","Signs the data with the private key and returns the result if successful.\nIf unsuccesful, an explanation string is returned",1,null],[11,"drop","","",1,null],[11,"eq","","",1,null]],"paths":[[3,"PublicKey"],[3,"PrivateKey"]]};
initSearch(searchIndex);
