let cardDeck = [
    {
        image:"plane0.png"
    },
    {
        image: "plane1.png",
        text: "At the begining of your end step, if you have no cards in hand,draw seven cards... whever you rall discard your hand"
    },
    {
        image: "plane2.png",
        text: "whenever a white creature is put into a graveyard from the battlefield, retunr it to the battlefield under its owner's control at the beginning of the next end step.Whenever a nonwhite creatre is put a graveyard from the battlefiled,return ut to its owner's gand at the beginnig of the next end step... ☯whenever you roll, crature can't attack you until a player plnaeswalks"
    },
    {
        image: "plane3.png",
        text: "Players may cast enchantemnt cards as though they had flash...☯whenever you roll destroy target creature that isn't enchanted "
    },
    {
        image: "plane4.png",
        text: "When you planeswalk to Aretopolis or at the beginning of your upkeep, put a scroll counter on Aretopolis, then you gain life equal to the number of scroll counters on it.When Aretopolis has ten or more scroll counters on it, planeswalk......☯whenever you roll, put a scroll counter on Aretopolis, then draw cards equal to the number of scroll counters on it."
    }, {
        image: "plane5.png",
        text: "No more than one creature cab attack each combat. No more than one creature can block each combat... ☯whenever you roll Astral Arena deal 2 damage to each creature"
    },
    {
        image: "plane6.png",
        text: "All creatures have exalted.(Whenever a creature attacks alone, it gets +1/+1 until end of turn for each instance of exalted among permanents its controller controls.)...☯whenever you roll, put a divinity counter on target green, white, or blue creature. That creature has indestructible for as long as it has a divinity counter on it."
    },
    {
        image: "plane7.png",
        text: "Whenever a creature enters the battlefield, it gains double strike and haste until end of turn....☯whenever you roll, exile target nontoken creature you control, then return it to the battlefield under your control."
    },
    {
        image: "plane8.png",
        text: "Creatures without flying or islandwalk can't attack...☯whenever you roll, until a player planeswalks, you can't lose the game and your opponents can't win the game."
    },
    {
        image: "plane9.png",
        text: "When you planeswalk to Cliffside Market or at the beginning of your upkeep, you may exchange life totals with target player.. ☯whenever you roll, exchange control of two target permanents that share a card type."
    },
    {
        image: "plane10.png",
        text: "If a creature you control would untap during your untap step, put two +1/+1 counters on it instead..☯whenever you roll, untap each creature you control."
    },
    {
        image: "plane11.png",
        text: "Whenever a player taps a permanent for mana, that player adds one mana of any type that permanent produced...☯whenever you roll, target player can't cast spells until a player planeswalks."
    },
    {
        image: "plane12.png",
        text: "Red spells cost (1) less to cast.Green spells cost (1) less to cast...☯whenever you roll, put X +1/+1 counters on target creature, where X is that creature's mana value."
    },
    {
        image: "plane13.png",
        text: "Whenever a player casts a spell, that player may gain 2 life..☯whenever you roll, you may gain 10 life."
    },
    {
        image: "plane14.png",
        text: "When you planeswalk to Furnace Layer or at the beginning of your upkeep, select target player at random. That player discards a card. If that player discards a land card this way, they lose 3 life..☯whenever you roll, you may destroy target nonland permanent"
    },
    {
        image: "plane15.png",
        text: "All creature has vigilance...☯whenever you roll,creature you control are indestructible this turn"
    },
    {
        image: "plane16.png",
        text: "At end of combat,you may exchabge control of target creature you control that dealt combat damage to a player this combat and target creature that player controls... ☯whenever you roll.gain control of target creature you own"
    },
    {
        image: "plane17.png",
        text: "Whenever a player casts an instant or sorcery spell with a single target, that player copies that spell for each other spell, permanent, card not on the battlefield, and/or player the spell could target. Each copy targets a different one of them...Whenever you rol, choose target creature. Each player except that creature's controller creates a token that's a copy of that creature."
    },
    {
        image: "plane18.png",
        text: "Whenever a land enters the battelfield,that land's controller puts three 0/1 white Goat creature tokens onto the battelfield...☯whenever you roll, put 0/1 white Goat creature token onto the battelfield"
    },
    {
        image: "plane19.png",
        text: "Whenever a creature dies, its controller distributes a number of +1/+1 counters equal to its power among any number of target creatures they control...☯whenever you roll, each player exiles all creatures they control and creates X 1/1 green Saproling creature tokens, where X is the total power of the creatures they exiled this way. Then planeswalk."
    },
    {
        image: "plane20.png",
        text: "Blue, black, and/or red creature cards in your graveyard have unearth. The unearth cost is equal to the card's mana cost.(Pay the card's mana cost: Return it to the battlefield. The creature gains haste. Exile it at the beginning of the next end step or if it would leave the battlefield. Unearth only as a sorcery.)...☯whenever you roll, put target creature card from a graveyard onto the battlefield under your control."
    },
    {
        image: "plane21.png",
        text: "When you planeswalk to Grove of the Dreampods or at the beginning of your upkeep, reveal cards from the top of your library until you reveal a creature card. Put that card onto the battlefield and the rest on the bottom of your library in a random order....☯whenever you roll, return target creature card from your graveyard to the battlefield."
    },
    {
        image: "plane22.png",
        text: "Creatures with power 7 or greater can't attack or block...☯whenever you roll, create a 7/7 colorless Eldrazi creature token with annihilator 1(Whenever it attacks, defending player sacrifices a permanent.)"
    },
    {
        image: "plane23.png",
        text: "All permanents untap during each player's untap step...☯whenever you roll, you may search your library for up to three basic land cards, put them onto the battlefield tapped, then shuffle."
    },
    {
        image: "plane24.png",
        text: "Whenever a creature enters the battlefield, that creature's controller may have it deal damage equal to its power to any target of their choice..☯whenever you roll, exile target creature, then return it to the battlefield under its owner's control."
    },
    {
        image: "plane25.png",
        text: "Whenever a nontoken creature enters the battlefield, its controller creates a token that's a copy of that creature..☯whenever you roll, destroy target creature and all other creatures with the same name as that creature."
    },
    {
        image: "plane26.png",
        text: "Whenever a player casts an instant or sorcery spell, that player copies it. The player may choose new targets for the copy..☯whenever you roll, instant and sorcery spells you cast this turn cost (3) less to cast."
    },
    {
        image: "plane27.png",
        text: "Whenever a player casts a black, red, or green creature spell, it gains devour 5.(As the creature enters the battlefield, its controller may sacrifice any number of creatures. The creature enters the battlefield with five times that many +1/+1 counters on it.)..☯whenever you roll, create two 1/1 red Goblin creature tokens."
    },
    {
        image: "plane28.png",
        text: "Prevent all combat damage that would be dealt by non-Werewolf creatures..☯whenever you roll, each creature you control gets +2/+2, gains trample, and becomes a Werewolf in addition to its other types until end of turn."
    },
    {
        image: "plane29.png",
        text: "Whenever a creature you control attacks a player, for each other opponent, you may create a token that's a copy of that creature, tapped and attacking that opponent. Exile those tokens at the beginning of the next end step..☯whenever you roll, you may sacrifice any number of creatures. If you do, Kharasha Foothills deals that much damage to target creature."
    },
    {
        image: "plane30.png",
        text: "When you planeswalk to Kilnspire District or at the beginning of your precombat main phase, put a charge counter on Kilnspire District, then add Red for each charge counter on it..☯whenever you roll, you may pay Variable Colorless. If you do, Kilnspire District deals (X) damage to any target."
    },
    {
        image: "plane31.png",
        text: "All creatures get +2/+2..☯whenever you roll, you may add White,Blue,Black,Red,Green."
    },
    {
        image: "plane32.png",
        text: "At the beginning of your upkeep, sacrifice a creature. If you can't, planeswalk...☯whenever you roll, any number of target players each create a 2/2 black Zombie creature token."
    },
    {
        image: "plane33.png",
        text: "At the beginning of your upkeep, mill ten cards..☯whenever you roll, target player mills ten cards."
    },
    {
        image: "plane34.png",
        text: "All creatures have Tap:Add Green Green...☯whenever you roll, untap all creatures you control."
    },
    {
        image: "plane35.png",
        text: "Whenever a player casts a spell, that player may draw a card..☯whenever you roll, each player may return a blue card from their graveyard to their hand"
    },
    {
        image: "plane36.png",
        text: "Whenever a player casts a spell, that player flips a coin. If the player loses the flip, counter that spell..☯whenever you roll, target player reveals the top card of their library. If it's a nonland card, you may cast it without paying its mana cost."
    },
    {
        image: "plane37.png",
        text: "At the beginning of your end step, put a pressure counter on Mount Keralia.When you planeswalk away from Mount Keralia, it deals damage equal to the number of pressure counters on it to each creature and each planeswalker..☯whenever you roll, prevent all damage that planes named Mount Keralia would deal this game to permanents you control."
    },
    {
        image: "plane38.png",
        text: "Whenever a nontoken creature enters the battlefield, its controller may search their library for a basic land card, put it onto the battlefield tapped, then shuffle..☯whenever you roll, target land becomes a 4/4 creature that's still a land."
    },
    {
        image: "plane39.png",
        text: "At the beginning of your upkeep, put a flame counter on Naar Isle, then Naar Isle deals damage to you equal to the number of flame counters on it..☯whenever you roll, Naar Isle deals 3 damage to target player or planeswalker."
    },
    {
        image: "plane40.png",
        text: "You may play any number of lands on each of your turns..☯whenever you roll, target red, green, or white creature you control gets +1/+1 until end of turn for each land you control.."
    },
    {
        image: "plane41.png",
        text: "At the beginning of your end step, mill seven cards. Then return a card at random from your graveyard to your hand...☯whenever you roll, return target card from your graveyard to your hand."
    },
    {
        image: "plane42.png",
        text: "When you planeswalk away from Norn's Dominion, destroy each nonland permanent without a fate counter on it, then remove all fate counters from all permanents...☯whenever you roll, you may put a fate counter on target permanent."
    },
    {
        image: "plane43.png",
        text: "All creatures are black and have deathtouch..☯whenever you roll, creatures you control get +1/+0 and gain first strike until end of turn."
    },
    {
        image: "plane44.png",
        text: "Whenever a creature you control deals combat damage to a player, you may search your library for a basic land card, put it onto the battlefield tapped, then shuffle..☯whenever you roll, target creature can't be blocked this turn."
    },
    {
        image: "plane45.png",
        text: "When you planeswalk away from Orzhova, each player returns all creature cards from their graveyard to the battlefield...☯whenever you roll, for each opponent, exile up to one target creature card from that player's graveyard."
    },
    {
        image: "plane46.png",
        text: "Instant and sorcery cards in graveyards have flashback. The flashback cost is equal to the card's mana cost(Its owner may cast the card from their graveyard for its mana cost. Then they exile it.)... ☯whenever you roll, take an extra turn after this one."
    },
    {
        image: "plane47.png",
        text: "When you planeswalk to Panopticon, draw a card.At the beginning of your draw step, draw an additional card..☯whenever you roll, draw a card."
    },
    {
        image: "plane48.png",
        text: "At the beginning of your end step, put the cards in your hand on the bottom of your library in any order, then draw that many cards..☯whenever you roll, reveal the top three cards of your planar deck. Each of the revealed cards' abilities triggers. Then put the revealed cards on the bottom of your planar deck in any order."
    },
    {
        image: "plane49.png",
        text: "If you cast a spell this turn, you can't attack with creatures..If you attacked with creatures this turn, you can't cast spells..☯whenever you roll, you gain life equal to the number of cards in your hand."
    },
    {
        image: "plane50.png",
        text: "When you planeswalk to Quicksilver Sea or at the beginning of your upkeep, scry 4.(Look at the top four cards of your library, then put any number of them on the bottom of your library and the rest on top in any order.)..☯whenever you roll, reveal the top card of your library. You may play it without paying its mana cost.."
    },
    {
        image: "plane51.png",
        text: "All creatures have wither.(They deal damage to creatures in the form of -1/-1 counters.)☯whenever you roll, put a -1/-1 counter on target creature, two -1/-1 counters on another target creature, and three -1/-1 counters on a third target creature."
    },
    {
        image: "plane52.png",
        text: "When you planeswalk away from Sanctum of Serra, destroy all nonland permanents..☯whenever you roll, you may have your life total become 20."
    },
    {
        image: "plane53.png",
        text: "Players reveal each card they draw.Whenever a player draws a land card, that player gains 3 life.Whenever a player draws a nonland card, that player loses 3 life.☯whenever you roll, put target permanent on top of its owner's library."
    },
    {
        image: "plane54.png",
        text: "If an effect would create one or more tokens, it creates twice that many of those tokens instead.If an effect would put one or more counters on a permanent, it puts twice that many of those counters on that permanent instead..☯whenever you roll, until end of turn, whenever you tap a land for mana, add one mana of any type that land produced."
    },
    {
        image: "plane55.png",
        text: "All creatures have Red: This creature gets +1/+0 until end of turn..☯whenever you roll, create a 5/5 red Dragon creature token with flying."
    },
    {
        image: "plane56.png",
        text: "Players play with the top card of their libraries revealed.Spells that share a card type with the top card of a library can't be cast..☯whenever you roll, target player loses life equal to the number of cards in their hand."
    },
    {
        image: "plane57.png",
        text: "All creatures get +1/+1 and have haste..☯whenever you roll, untap all creatures that attacked this turn. After this main phase, there is an additional combat phase followed by an additional main phase."
    },
    {
        image: "plane58.png",
        text: "Players have no maximum hand size.☯whenever you roll the planar die, draw a card.☯whenever you roll, reveal the top card of your planar deck. You may put it on the bottom of your planar deck."
    },
    {
        image: "plane59.png",
        text: "Whenever a creature deals damage to one or more players for the first time each turn, put a +1/+1 counter on it..☯whenever you roll, each creature you control gains Tap: This creature deals 1 damage to target player or planeswalker until end of turn."
    },
    {
        image: "plane60.png",
        text: "If a source would deal damage to a permanent or player, it deals double that damage to that permanent or player instead..☯whenever you roll, Stronghold Furnace deals 1 damage to any target."
    },
    {
        image: "plane61.png",
        text: "Whenever a creature leaves the battlefield, its controller draws a card..☯whenever you roll, return target creature you control to its owner's hand."
    },
    {
        image: "plane62.png",
        text: "Any time you could cast a sorcery, you may exile a nonland card from your hand with X time counters on it, where X is its mana value. If the exiled card doesn't have suspend, it gains suspend.(At the beginning of its owner's upkeep, they remove a time counter. When the last is removed, the player casts it without paying its mana cost. If it's a creature, it has haste.)..☯whenever you roll, remove two time counters from each suspended card you own."
    },
    {
        image: "plane63.png",
        text: "Creatures can't block..☯whenever you roll, draw a card for each land you control."
    },
    {
        image: "plane64.png",
        text: "Whenever a player taps a land for mana, Tember City deals 1 damage to that player..☯whenever you roll, each other player sacrifices a nonland permanent."
    },
    {
        image: "plane65.png",
        text: "When you planeswalk to The Aether Flues or at the beginning of your upkeep, you may sacrifice a creature. If you do, reveal cards from the top of your library until you reveal a creature card, put that card onto the battlefield, then shuffle all other cards revealed this way into your library..☯whenever you roll, you may put a creature card from your hand onto the battlefield."
    },
    {
        image: "plane66.png",
        text: "Whenever a nonblack card is put into a player's graveyard from anywhere, that player loses 1 life..☯whenever you roll, each opponent discards a card."
    },
    {
        image: "plane67.png",
        text: "Players skip their untap steps..☯whenever you roll, untap all permanents you control."
    },
    {
        image: "plane68.png",
        text: "At the beginning of your upkeep, sacrifice a nonblack creature..☯whenever you roll, create a 2/2 black Zombie creature token."
    },
    {
        image: "plane69.png",
        text: "Each creature assigns combat damage equal to its toughness rather than its power..☯whenever you roll, creatures you control get +0/+2 and gain trample until end of turn."
    },
    {
        image: "plane70.png",
        text: "All creatures get -5/-0..☯whenever you roll, you may destroy target creature if its power is 0 or less."
    },
    {
        image: "plane71.png",
        text: "When you planeswalk to The Maelstrom or at the beginning of your upkeep, you may reveal the top card of your library. If it's a permanent card, you may put it onto the battlefield. If you revealed a card but didn't put it onto the battlefield, put it on the bottom of your library..☯whenever you roll, return target permanent card from your graveyard to the battlefield."
    },
    {
        image: "plane72.png",
        text: "Creatures with flying get +2/+0.Creatures without flying get -2/-0...☯whenever you roll, target creature gains flying until end of turn."
    },
    {
        image: "plane73.png",
        text: "When you encounter Planewide Disaster, destroy all creatures.(Then planeswalk away from this phenomenon.)"
    },
    {
        image: "plane74.png",
        text: "When you encounter Chaotic Aether, each blank roll of the planar die is a roll until a player planeswalks away from a plane.(Then planeswalk away from this phenomenon.)"
    },
    {
        image: "plane75.png",
        text: "When you encounter Spatial Merging, reveal cards from the top of your planar deck until you reveal two plane cards. Simultaneously planeswalk to both of them. Put all other cards revealed this way on the bottom of your planar deck in any order.."
    },
    {
        image: "plane76.png",
        text: "When you encounter Time Distortion, reverse the game's turn order.(For example, if play had proceeded clockwise around the table, it now goes counterclockwise. Then planeswalk away from this phenomenon.)"
    },
    {
        image: "plane77.png",
        text: "When you encounter Reality Shaping, starting with you, each player may put a permanent card from their hand onto the battlefield.(Then planeswalk away from this phenomenon.)"
    },
    {
        image: "plane78.png",
        text: "Instant and sorcery spells have rebound.(The spell's controller exiles the spell as it resolves if they cast it from their hand. At the beginning of that player's next upkeep, they may cast that card from exile without paying its mana cost.)...☯whenever you roll, you may search your library for an instant or sorcery card, reveal it, put it into your hand, then shuffle."
    },
    {
        image: "plane79.png",
        text: "All lands have Tap: Add one mana of any color..☯whenever you roll, reveal the top three cards of your library. Put all land cards revealed this way into your hand and the rest on the bottom of your library in any order."
    },
    {
        image: "plane80.png",
        text: "Creature spells cost (2) less to cast..☯whenever you roll, reveal the top three cards of your library. Put all creature cards revealed this way into your hand and the rest into your graveyard."
    },
    {
        image: "plane81.png",
        text: "Whenever a creature deals combat damage to a player, its controller may draw a card.☯whenever you roll, you have no maximum hand size for the rest of the game."
    },
    {
        image: "plane82.png",
        text: "Each creature gets +1/+1 for each other creature on the battlefield that shares at least one creature type with it.(For example, if two Elemental Shamans and an Elemental Spirit are on the battlefield, each gets +2/+2.)..☯whenever you roll, target creature gains all creature types until end of turn."
    },
    {
        image: "plane83.png",
        text: "Players play with the top card of their libraries revealed.You may play lands and cast spells from the top of any player's library.☯whenever you roll, each player mills a card."
    },
    {
        image: "plane84.png",
        text: "When you encounter Morphic Tide, each player shuffles all permanents they own into their library, then reveals that many cards from the top of their library. Each player puts all artifact, creature, land, and planeswalker cards revealed this way onto the battlefield, then does the same for enchantment cards, then puts all cards revealed this way that weren't put onto the battlefield on the bottom of their library in any order.(Then planeswalk away from this phenomenon.)"
    },
    {
        image: "plane85.png",
        text: "When you encounter Mutual Epiphany, each player draws four cards. (Then planeswalk away from this phenomenon.)"
    },
    {
        image: "plane86.png",
        text: "When you encounter Interplanar Tunnel, reveal cards from the top of your planar deck until you reveal five plane cards. Put a plane card from among them on top of your planar deck, then put the rest of the revealed cards on the bottom in a random order.(Then planeswalk away from this phenomenon.)"
    }
];

let cardsDrawn = 0;

const drawButton = document.getElementById("draw-button");
drawButton.addEventListener("click", drawCard);

async function drawCard() {
  if (cardDeck.length === 0) {
    alert("No hay más cartas en el mazo");
    return;
  }

  const randomIndex = Math.floor(Math.random() * cardDeck.length);
  const selectedCard = cardDeck.splice(randomIndex, 1)[0];

  // Fetch para la imagen
  const response = await fetch(`https://raw.githubusercontent.com/xabrielgonzalez/apiplane/main/img/${selectedCard.image}`);
  const blob = await response.blob();
  const imageURL = URL.createObjectURL(blob);

  // Actualizar el contenido de la carta
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = `
    <img src="${imageURL}" alt="card">
    <p class="cardinfo">${selectedCard.text}</p>
  `;

 

  cardsDrawn++;
  console.log(`Carta seleccionada: ${selectedCard.text}. Cartas restantes: ${cardDeck.length}`);
}