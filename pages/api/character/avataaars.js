export default function avataaars(req, res){
    res.json({
            clothing: ['blazerAndShirt' , 'blazerAndSweater' , 'collarAndSweater' , 'graphicShirt' , 'hoodie' , 'overall' , 'shirtCrewNeck' , 'shirtScoopNeck' , 'shirtVNeck'],
            mouth: ['concerned' , 'default' , 'disbelief' , 'eating' , 'grimace' , 'sad' , 'screamOpen' , 'serious' , 'smile' , 'tongue' , 'twinkle' , 'vomit'],
            eyes: ['closed' , 'cry' , 'default' , 'eyeRoll' , 'happy' , 'hearts' , 'side' , 'squint' , 'surprised' , 'winkWacky' , 'wink' , 'xDizzy'],
            eyebrows: ['angryNatural' , 'defaultNatural' , 'flatNatural' , 'frownNatural' , 'raisedExcitedNatural' , 'sadConcernedNatural' , 'unibrowNatural' , 'upDownNatural' , 'angry' , 'default' , 'raisedExcited' , 'sadConcerned' , 'upDown'],
            top: ['eyepatch' , 'hat' , 'hijab' , 'turban' , 'winterHat1' , 'winterHat02' , 'winterHat03' , 'winterHat04' , 'bob' , 'bun' , 'curly' , 'curvy' , 'dreads' , 'frida' , 'fro' , 'froBand' , 'longButNotTooLong' , 'miaWallace' , 'shavedSides' , 'straight02' , 'straight01' , 'straightAndStrand' , 'dreads01' , 'dreads02' , 'frizzle' , 'shaggy' , 'shaggyMullet' , 'shortCurly' , 'shortFlat' , 'shortRound' , 'shortWaved' , 'sides' , 'theCaesar' , 'theCaesarAndSidePart' , 'bigHair'],
            hatColor: ["0e0e0e","3eac2c","6a4e35","85c2c6","796a45","562306","592454","ab2a18","ac6511","afafaf","b9a05f","cb6820","dba3be","e5d7a3"],
            hairColor: ["0e0e0e","3eac2c","6a4e35","85c2c6","796a45","562306","592454","ab2a18","ac6511","afafaf","b9a05f","cb6820","dba3be","e5d7a3"],
            skinColor: ["9e5622","763900","ecad80"]
    })
}