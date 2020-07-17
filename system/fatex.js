/**
 * The FATE extended game system for FoundryVTT
 *
 * Author: Patrick Bauer (Daddi#2333)
 * Repository: https://github.com/anvil-vtt/FateX
 * Software License: GNU GPLv3
 * Content License:
 *      This work is based on Fate Core System and Fate Accelerated Edition (found at http://www.faterpg.com/),
 *      products of Evil Hat Productions, LLC, developed, authored, and edited by Leonard Balsera, Brian Engard,
 *      Jeremy Keller, Ryan Macklin, Mike Olson, Clark Valentine, Amanda Valentine, Fred Hicks, and Rob Donoghue,
 *      and licensed for our use under the Creative Commons Attribution 3.0 Unported license
 *      (http://creativecommons.org/licenses/by/3.0/).
 */

import { FateX } from "./config.js";
import { ActorFate } from "./module/actor/ActorFate.js";
import { CharacterSheet } from "./module/actor/character/CharacterSheet.js";
import { HandlebarsHelpers } from "./module/helper/HandlebarsHelpers.js";
import { TemplatePreloader } from "./module/helper/TemplatePreloader.js";
import { AspectSheet } from "./module/item/aspect/AspectSheet.js";
import { ConsequenceSheet } from "./module/item/consequence/ConsequenceSheet.js";
import { ItemFate } from "./module/item/ItemFate.js";
import { SkillSheet } from "./module/item/skill/SkillSheet.js";
import { StressSheet } from "./module/item/stress/StressSheet.js";
import { TemplateActorPicker } from "./module/settings/TemplateActorPicker.js";
import { TemplateActors } from "./module/settings/TemplateActors.js";
import { TemplateActorSettings } from "./module/settings/TemplateActorSettings.js";

/* -------------------------------- */
/*	System initialization			*/
/* -------------------------------- */
Hooks.once('init', async function () {
    console.log(`FateX | Initializing FATE extended game system`);

    // Initialise config
    CONFIG.FateX = FateX;
    CONFIG.Actor.entityClass = ActorFate;
    CONFIG.Item.entityClass = ItemFate;

    // Preload all needed templates
    await TemplatePreloader.preloadHandlebarsTemplates();

    // Register HandlebarsHelpers
    HandlebarsHelpers.registerHelpers();

    // Initialize TemplateActors
    TemplateActors.init();

    // Unregister Core sheets
    Actors.unregisterSheet('core', ActorSheet);
    Items.unregisterSheet('core', ItemSheet);

    // Register FateX actor sheets
    Actors.registerSheet('FateX', CharacterSheet, {
        types: ['character'],
        makeDefault: true
    });

    // Register FateX item sheets
    Items.registerSheet('FateX', StressSheet, {
        types: ['stress'],
        makeDefault: true
    });

    Items.registerSheet('FateX', AspectSheet, {
        types: ['aspect'],
        makeDefault: true
    });

    Items.registerSheet('FateX', ConsequenceSheet, {
        types: ['consequence'],
        makeDefault: true
    });

    Items.registerSheet('FateX', SkillSheet, {
        types: ['skill'],
        makeDefault: true
    });
});

TemplateActors.hooks();
