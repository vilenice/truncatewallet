'use strict';

module.exports = function truncatewallet(account) {
    return account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : account;
};