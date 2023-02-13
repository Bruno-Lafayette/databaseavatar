export default function bigSmile(req, res){
    res.json({
            mouth: ['openedSmile' , 'unimpressed' , 'gapSmile' , 'openSad' , 'teethSmile' , 'awkwardSmile' , 'braces' , 'kawaii'],
            eyes: ['cheery' , 'normal' , 'confused' , 'starstruck' , 'winking' , 'sleepy' , 'sad' , 'angry'],
            hair: ['shortHair' , 'mohawk' , 'wavyBob' , 'bowlCutHair' , 'curlyBob' , 'straightHair' , 'braids' , 'shavedHead' , 'bunHair' , 'froBun' , 'bangs' , 'halfShavedHead' , 'curlyShortHair'],
            accessories: ['catEars' , 'glasses' , 'sailormoonCrown' , 'clownNose' , 'sleepMask' , 'sunglasses' , 'faceMask' , 'mustache'],
            hairColor: ["0e0e0e","3eac2c","6a4e35","85c2c6","796a45","562306","592454","ab2a18","ac6511","afafaf","b9a05f","cb6820","dba3be","e5d7a3"],
            skinColor: ["9e5622","763900","ecad80"]
   
     })
}