// Evidence types
const EMF_LEVEL_5 = 'EMF Level 5';
const FINGERPRINTS = 'Fingerprints';
const FREEZING_TEMPERATURES = 'Freezing temperatures';
const GHOST_ORB = 'Ghost orb';
const GHOST_WRITING = 'Ghost writing';
const SPIRIT_BOX = 'Spirit box';
const DOTS_PROJECTOR = 'D.O.T.S projector';

//TODO look into using an API to get the ghosts from the Wiki?
export const GHOSTS = [
    {
        'name': 'Banshee',
        'evidence': [DOTS_PROJECTOR, GHOST_ORB, FINGERPRINTS]
    },
    {
        'name': 'Demon',
        'evidence': [GHOST_WRITING, FINGERPRINTS, FREEZING_TEMPERATURES]
    },
    {
        'name': 'Goryo',
        'evidence': [DOTS_PROJECTOR, EMF_LEVEL_5, FINGERPRINTS]
    },
    {
        'name': 'Hantu',
        'evidence': [GHOST_ORB, FINGERPRINTS, FREEZING_TEMPERATURES]
    },
    {
        'name': 'Jinn',
        'evidence': [EMF_LEVEL_5, FINGERPRINTS, FREEZING_TEMPERATURES]
    },
    {
        'name': 'Mare',
        'evidence': [GHOST_WRITING, GHOST_ORB, SPIRIT_BOX]
    },
    {
        'name': 'Myling',
        'evidence': [GHOST_WRITING, EMF_LEVEL_5, FINGERPRINTS]
    },
    {
        'name': 'Obake',
        'evidence': [EMF_LEVEL_5, GHOST_ORB, FINGERPRINTS]
    },
    {
        'name': 'Oni',
        'evidence': [DOTS_PROJECTOR, EMF_LEVEL_5, FREEZING_TEMPERATURES]
    },
    {
        'name': 'Onryo',
        'evidence': [GHOST_ORB, FREEZING_TEMPERATURES, SPIRIT_BOX]
    },
    {
        'name': 'Phantom',
        'evidence': [DOTS_PROJECTOR, FINGERPRINTS, SPIRIT_BOX]
    },
    {
        'name': 'Poltergeist',
        'evidence': [GHOST_WRITING, FINGERPRINTS, SPIRIT_BOX]
    },
    {
        'name': 'Raiju',
        'evidence': [DOTS_PROJECTOR, EMF_LEVEL_5, GHOST_ORB]
    },
    {
        'name': 'Revenant',
        'evidence': [GHOST_WRITING, GHOST_ORB, FREEZING_TEMPERATURES]
    },
    {
        'name': 'Shade',
        'evidence': [GHOST_WRITING, EMF_LEVEL_5, FREEZING_TEMPERATURES]
    },
    {
        'name': 'Spirit',
        'evidence': [GHOST_WRITING, EMF_LEVEL_5, SPIRIT_BOX]
    },
    {
        'name': 'The Twins',
        'evidence': [EMF_LEVEL_5, FREEZING_TEMPERATURES, SPIRIT_BOX]
    },
    {
        'name': 'Wraith',
        'evidence': [DOTS_PROJECTOR, EMF_LEVEL_5, SPIRIT_BOX]
    },
    {
        'name': 'Yokai',
        'evidence': [DOTS_PROJECTOR, GHOST_ORB, SPIRIT_BOX]
    },
    {
        'name': 'Yurei',
        'evidence': [DOTS_PROJECTOR, GHOST_ORB, FREEZING_TEMPERATURES]
    },
]