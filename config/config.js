"use strict";
module.exports = {
    public: true,
    host: '0.0.0.0',
    port: 9002,
    bind: undefined,
    reverseProxy: false,
    maxHistory: 10000,
    https: {
        enable: false,
        key: "",
        certificate: "",
        ca: "",
    },
    theme: "default",
    prefetch: false,
    disableMediaPreview: false,
    prefetchStorage: false,
    prefetchMaxImageSize: 2048,
    prefetchMaxSearchSize: 50,
    prefetchTimeout: 5000,
    fileUpload: {
        enable: false,
        maxFileSize: 10240,
        baseUrl: null,
    },
    transports: ["polling", "websocket"],
    leaveMessage: "The Lounge - https://thelounge.chat",
    defaults: {
        name: "gUfriL",
        host: "irc.gufril.eu.org",
        port: 6697,
        password: "",
        tls: true,
        rejectUnauthorized: false,
        nick: "thelounge%%",
        username: "thelounge",
        realname: "",
        join: "#thelounge",
        leaveMessage: "",
    },
    lockNetwork: true,
    messageStorage: ["sqlite", "text"],
    storagePolicy: {
        enabled: false,
        maxAgeDays: 7,
        deletionPolicy: "statusOnly",
    },
    useHexIp: false,
    webirc: null,
    identd: {
        enable: false,
        port: 113,
    },
    oidentd: null,
    ldap: {
        enable: false,
        url: "ldaps://example.com",
        tlsOptions: {},
        primaryKey: "uid",
        searchDN: {
            rootDN: "cn=thelounge,ou=system-users,dc=example,dc=com",
            rootPassword: "1234",
            filter: "(&(objectClass=person)(memberOf=ou=accounts,dc=example,dc=com))",
            base: "dc=example,dc=com",
            scope: "sub",
        },
    },
    debug: {
        ircFramework: true,
        raw: true,
    },
};