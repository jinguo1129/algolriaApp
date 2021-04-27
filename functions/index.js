'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const cron = require('./cron');
const notifications = require('./notifications');
const recurring = require('./recurring');
const slack = require('./slack');
const stripe = require('./stripe');
const algoliaSearch = require('./algoliaSearch');
/* Stripe */
module.exports.stripeCleanupUser = stripe.cleanupUser;
module.exports.stripeCreateAccount = stripe.createAccount;
module.exports.stripeCreateCustomer = stripe.createCustomer;
module.exports.stripeGetAccount = stripe.getAccount;
module.exports.stripeGetAccountBalance = stripe.getAccountBalance;
module.exports.stripeGetAccountTransactions = stripe.getAccountTransactions;
module.exports.stripeListPayouts = stripe.listPayouts;
module.exports.stripeRetrievePayouts = stripe.retrievePayouts;

module.exports.stripeChargeCard = stripe.chargeCard;
module.exports.stripeCreateCard = stripe.createCard;
module.exports.stripeDeleteCard = stripe.deleteCard;
module.exports.stripeGetCards = stripe.getCards;

/* Slack Hooks */
// module.exports.slackCreateUser = slack.createUser;

/* Notifications */
module.exports.notificationsChatMessage = notifications.chatMessage;
module.exports.notificationsEventInvite = notifications.eventInvite;
module.exports.notificationsFriendsRequest = notifications.friendsRequest;
module.exports.notificationsEventRequest = notifications.eventRequest;
module.exports.notificationsPushNotification = notifications.pushNotification;

/* Cron */
module.exports.cronEveryHour = cron.everyHour;
module.exports.cronEveryDay = cron.everyDay;
module.exports.cronEveryWeek = cron.everyWeek;

/* Recurring */
module.exports.recurEvent = recurring.recurEventHttp;

/* Algolia Search */
//module.exports.initIndex = algoliaSearch.initIndex;
module.exports.createIndex = algoliaSearch.createIndex;
//module.exports.reindexIndex = algoliaSearch.reindexIndex;
module.exports.removeIndex = algoliaSearch.removeIndex;
module.exports.updateObject = algoliaSearch.updateObject;
module.exports.searchQuery = algoliaSearch.searchQuery;