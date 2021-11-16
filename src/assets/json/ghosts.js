/**
 * Version of Phasmophobia evidence and hints are based on
 * NOTE: 
 *  Minor patches that had no ghost changes, or were just to fix a bug in ghost behaviour, are ignored.
 *  Only updates that truly change the set-out ghost behaviour will trigger a version update. 
 *  For example: a ghost is added in version 5 that has a new evidence type "draws animals" and for some reason it doesn't actually work,
 *  they patch it, and the game is now up to version 5.1. This file would still keep its evidence version as 5, as that's where the new evidence was
 *  introduced.
*/
//const PHASMOPHOBIA_EVIDENCE_VERSION = '0.4.0'; // Nightmare update on October 25th

// Evidence types
const EVIDENCE = {
    EMF_LEVEL_5: 'EMF Level 5',
    FINGERPRINTS: 'Fingerprints',
    FREEZING_TEMPERATURES: 'Freezing temperatures',
    GHOST_ORB: 'Ghost orb',
    GHOST_WRITING: 'Ghost writing',
    SPIRIT_BOX: 'Spirit box',
    DOTS_PROJECTOR: 'D.O.T.S projection',
}

/**
 * Unique behavior
 * These behaviours are unique enough that they can be used to determine the ghost right away
 */
// You can only see the D.O.T.S projection on the video feed
const UNIQUE_ONLY_VIDEO_DOTS = 'D.O.T.S only on video feed';
// Fingerprints can be seen with 6 fingers
const UNIQUE_6_FINGERS = 'Fingerprint with 6 fingers';
// After walking into the salt, footprints won't be left as the ghost walks around
const UNIQUE_NO_FOOTPRINTS = 'No footprints';
// Ghost temporarily disappears when photo is taken of it
const UNIQUE_DISSAPEAR_ON_PHOTO = 'Disappears on photo taken';
// Successful answers from the Ouija Board won't drop sanity
const UNIQUE_OUIJA_SANITY_DROP = 'No sanity drop on successful Ouija';

/**
 * Behavioral hints
 * As of right now it can be hard to determine whether they're happening or not, so we will call them hints rather than unique behaviour.
 * To avoid cluttering rather than help, some potential hints have been omited because they're too vague or similar to other hints
 */
// Always target the same player during hunts until they're killed. If that player is outside, it defaults to normal ghost hunt behaviour
const HINT_SAME_HUNT_TARGET = 'Targets same player during hunts';
const HINT_HUNT_EARLY_DARK = 'Hunts earlier in darkness';
// This isn't truly unique as there are other ghosts that can hunt at that point too, depending on the circumstances
const HINT_HUNT_70_SANITY = 'Hunts from 70% sanity';
// Can hunt at any sanity level
const HINT_EARLY_HUNT = 'Can hunt at any sanity';
// More often makes paranormal sounds that are picked up by the parabolic microphone than other ghosts
const HINT_PARANORMAL_SOUND = 'Often makes paranormal sounds';
// Will move around fast if there's electronics nearby, this is not limited chasing a particular player
const HINT_ELECTRONICS_FAST_MOVEMENT = 'Faster from electronics siphon';
// Moves very fast when targetting a player that's in line of sight
const HINT_FAST_TARGET_HUNT = 'Moves very fast when in line of sight';
// Less active when there are multiple people nearby
const HINT_SHY_GHOST = 'Less active when multiple people nearby';
// Using a smudge stick near the ghost will prevent it from hunting for a longer time than other ghosts
const HINT_SMUDGE_HUNT_COOLDOWN = 'Smudging nearby prevents hunt for a longer time';
// Two ghost interactions happen at the same
const HINT_SIMULTANEUS_ACTIVITY = 'Two interactions at the same time';
// Can throw multiple objects at once
const HINT_THROWS_MULTIPLE_OBJECTS = 'Throws multiple objects at once';


//TODO look into using an API to get the ghosts from the Wiki?

export const GHOSTS = [
    {
        'name': 'Banshee',
        'evidence': [EVIDENCE.DOTS_PROJECTOR, EVIDENCE.GHOST_ORB, EVIDENCE.FINGERPRINTS],
        'hints': [HINT_SAME_HUNT_TARGET, HINT_EARLY_HUNT]
    },
    {
        'name': 'Demon',
        'evidence': [EVIDENCE.GHOST_WRITING, EVIDENCE.FINGERPRINTS, EVIDENCE.FREEZING_TEMPERATURES],
        'unique': [UNIQUE_OUIJA_SANITY_DROP],
        'hints': [HINT_HUNT_70_SANITY]
    },
    {
        'name': 'Goryo',
        'evidence': [EVIDENCE.DOTS_PROJECTOR, EVIDENCE.EMF_LEVEL_5, EVIDENCE.FINGERPRINTS],
        'unique': [UNIQUE_ONLY_VIDEO_DOTS]
    },
    {
        'name': 'Hantu',
        'evidence': [EVIDENCE.GHOST_ORB, EVIDENCE.FINGERPRINTS, EVIDENCE.FREEZING_TEMPERATURES]
    },
    {
        'name': 'Jinn',
        'evidence': [EVIDENCE.EMF_LEVEL_5, EVIDENCE.FINGERPRINTS, EVIDENCE.FREEZING_TEMPERATURES]
    },
    {
        'name': 'Mare',
        'evidence': [EVIDENCE.GHOST_WRITING, EVIDENCE.GHOST_ORB, EVIDENCE.SPIRIT_BOX],
        'hints': [HINT_HUNT_EARLY_DARK]
    },
    {
        'name': 'Myling',
        'evidence': [EVIDENCE.GHOST_WRITING, EVIDENCE.EMF_LEVEL_5, EVIDENCE.FINGERPRINTS],
        'hints': [HINT_PARANORMAL_SOUND]
    },
    {
        'name': 'Obake',
        'evidence': [EVIDENCE.EMF_LEVEL_5, EVIDENCE.GHOST_ORB, EVIDENCE.FINGERPRINTS],
        'unique': [UNIQUE_6_FINGERS]
    },
    {
        'name': 'Oni',
        'evidence': [EVIDENCE.DOTS_PROJECTOR, EVIDENCE.EMF_LEVEL_5, EVIDENCE.FREEZING_TEMPERATURES]
    },
    {
        'name': 'Onryo',
        'evidence': [EVIDENCE.GHOST_ORB, EVIDENCE.FREEZING_TEMPERATURES, EVIDENCE.SPIRIT_BOX]
    },
    {
        'name': 'Phantom',
        'evidence': [EVIDENCE.DOTS_PROJECTOR, EVIDENCE.FINGERPRINTS, EVIDENCE.SPIRIT_BOX],
        'unique': [UNIQUE_DISSAPEAR_ON_PHOTO]
    },
    {
        'name': 'Poltergeist',
        'evidence': [EVIDENCE.GHOST_WRITING, EVIDENCE.FINGERPRINTS, EVIDENCE.SPIRIT_BOX],
        'hints': [HINT_THROWS_MULTIPLE_OBJECTS]
    },
    {
        'name': 'Raiju',
        'evidence': [EVIDENCE.DOTS_PROJECTOR, EVIDENCE.EMF_LEVEL_5, EVIDENCE.GHOST_ORB],
        'hints': [HINT_ELECTRONICS_FAST_MOVEMENT]
    },
    {
        'name': 'Revenant',
        'evidence': [EVIDENCE.GHOST_WRITING, EVIDENCE.GHOST_ORB, EVIDENCE.FREEZING_TEMPERATURES],
        'hints': [HINT_FAST_TARGET_HUNT]
    },
    {
        'name': 'Shade',
        'evidence': [EVIDENCE.GHOST_WRITING, EVIDENCE.EMF_LEVEL_5, EVIDENCE.FREEZING_TEMPERATURES],
        'hints': [HINT_SHY_GHOST]
    },
    {
        'name': 'Spirit',
        'evidence': [EVIDENCE.GHOST_WRITING, EVIDENCE.EMF_LEVEL_5, EVIDENCE.SPIRIT_BOX],
        'hints': [HINT_SMUDGE_HUNT_COOLDOWN]
    },
    {
        'name': 'The Twins',
        'evidence': [EVIDENCE.EMF_LEVEL_5, EVIDENCE.FREEZING_TEMPERATURES, EVIDENCE.SPIRIT_BOX],
        'hints': [HINT_SIMULTANEUS_ACTIVITY]
    },
    {
        'name': 'Wraith',
        'evidence': [EVIDENCE.DOTS_PROJECTOR, EVIDENCE.EMF_LEVEL_5, EVIDENCE.SPIRIT_BOX],
        'unique': [UNIQUE_NO_FOOTPRINTS]
    },
    {
        'name': 'Yokai',
        'evidence': [EVIDENCE.DOTS_PROJECTOR, EVIDENCE.GHOST_ORB, EVIDENCE.SPIRIT_BOX]
    },
    {
        'name': 'Yurei',
        'evidence': [EVIDENCE.DOTS_PROJECTOR, EVIDENCE.GHOST_ORB, EVIDENCE.FREEZING_TEMPERATURES]
    },
]