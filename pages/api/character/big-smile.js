export default function big-smile(req, res){
    res.json({
            mouth: ['openedSmile' , 'unimpressed' , 'gapSmile' , 'openSad' , 'teethSmile' , 'awkwardSmile' , 'braces' , 'kawaii'],
            eyes: ['cheery' , 'normal' , 'confused' , 'starstruck' , 'winking' , 'sleepy' , 'sad' , 'angry'],
            hair: ['shortHair' , 'mohawk' , 'wavyBob' , 'bowlCutHair' , 'curlyBob' , 'straightHair' , 'braids' , 'shavedHead' , 'bunHair' , 'froBun' , 'bangs' , 'halfShavedHead' , 'curlyShortHair'],
            accessories: ['catEars' , 'glasses' , 'sailormoonCrown' , 'clownNose' , 'sleepMask' , 'sunglasses' , 'faceMask' , 'mustache'],
    })
}