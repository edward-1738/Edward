
const translations = {

    afktemx: 'Dude, do you want to leave a whole testament or what?',
    afkdone: 'AFK Set',
    afkdel: 'Welcome back',
    afktime: 'Away since',
    with: 'Reason',
    afkmsg: 'I will notify anyone who mentions you',
    afktag: 'The user is AFK',
    name: 'Name',
    noMention: 'Mention a User',
    userDb: 'The user is not in my database',
    example: 'Example',

    //-- Stick reaction
    killmsg: 'Killed',
    kismsg: 'Gave a kiss to',
    patmsg: 'Pat',
    slapmsg: 'Slapped',

    next: 'Next',
    hi: 'Hello',
    gp: 'Group',
    nobbot: 'This command can only be used in the main bot',
    botqr: '*Use this Code to become a Bot*\n\n1. Click on the three dots in the top right corner.\n2. Tap Linked Devices.\n3. Select *Link with phone number*\n\n*Note:* The code is only valid for this number.',
    recon: 'Connection lost...',
    sesClose: 'The connection has been closed, you have to manually connect by sending the *ID*',
    connet: 'Connected successfully',
    connID: '❀ sᥙᥴᥴᥱss𝖿ᥙᥣᥣᥡ ᥴ᥆ᥒᥒᥱᥴ𝗍ᥱძ 𝗍᥆ ᥕһᥲ𝗍sᥲ⍴⍴, ᥒᥱ᥊𝗍 𝗍іmᥱ ᥡ᥆ᥙ ძіsᥴ᥆ᥒᥒᥱᥴ𝗍 ᥙsᥱ *#delsesion* ᥲᥒძ ᥲgᥲіᥒ *#code.*\ᥒ\ᥒ> ${dev}',
    connMsg: 'The next time you connect, send the following message to log in without scanning another *QR* code',
    sinsb: 'There are no active subbots at this time',
    botlist: 'Active Subbots',
    newcode: (usedPrefix) => `Great! You can now use *${usedPrefix}botclone* to request a new QR code`,
    nsbot: 'This command is only for *Active Sub Bots*',
    msgcode: 'The new code has been sent to your private chat',
    stopbot: 'Bot disconnected',

    total: 'Total',
    tx: 'Transmission',
    txdone: 'Transmission sent',
    cmdlist: '*COMMAND LIST*\n\n▢ *Info:* If it is in *bold*, it is blocked',
    notext: 'Repeat by adding text',
    textSe: 'Separate the text with a',
    reply: 'Reply to a message',
    replyImg: 'Reply to an image',
    cmdSave: 'Command saved',

    oversizePrem: 'The file size exceeds the download limit',
    error: 'An error occurred, please try again later',
    size: 'Size',
    link: 'Link',
    dev: 'Developer',
    version: 'Version',
    searchTo: (value, usedPrefix, command) => `To search in ${value}:\n\n📌Use: *${usedPrefix + command} <text>*\n\nTo download from URL:\n*${usedPrefix + command}* <link>`,
    search: (value) => `Enter what you want to search in *${value}*`,
    lastUp: 'Last Update',
    noLink: (value) => `Enter a ${value} link`,
    ytLink: 'Enter a YouTube link',
    title: 'Title',
    noUsername: 'Enter a Username',
    username: 'Username',
    followers: 'Followers',
    follows: 'Following',
    bio: 'Bio',
    posts: 'Posts',
    aploud: 'Uploaded',
    limitdl: 'The file exceeds the download limit',
    limitdlTe: 'Upgrade to premium to download files up to',
    duration: 'Duration',
    views: 'Views',
    quality: 'Quality',
    type: 'Type',
    desc: 'Description',
    useCmd: 'Command usage',
    noNum: 'Enter only numbers',
    random: 'Random',

    purse: 'Purse',
    dmd: 'Diamonds',
    money: 'Coins',
    bank: 'Bank',
    itemV: 'To view all *Items*',
    isNan: 'The amount must be a valid number',
    voucher: 'Voucher',
    buy: 'Purchased',
    buyCount: 'Quantity purchased',
    spent: 'Spent',
    buyNan: (value) => `You don't have enough *${value}* to buy`,
    noItem: (usedPrefix) => `That item doesn't exist:\n\n*${usedPrefix}shop* to see available items`,
    noTime: 'Invalid time format',
    second: 'Second(s)',
    hour: 'Hour(s)',
    minute: 'Minute(s)',
    day: 'Day(s)',

    robCd: 'You cannot commit a *Crime* at this time. You must wait',
    crime: 'You have successfully committed a crime',
    crimeAl: 'You were not very careful when entering to steal and activated the alarm. You could only take',
    robMul: 'Oh no! Your crime has failed and you have been fined',
    victin: 'Victim',
    robDo: 'You stole',
    tag: 'Tag',
    dailyCd: 'You have already collected your daily reward. Come back in',
    daily: 'Daily Reward',
    amount: 'Amount',
    dep: (value) => `You have deposited *${value}🪙* to the Bank`,
    depNan: 'You have no money to deposit',
    resBt: 'Reset',
    lbTitle: 'Leaderboard',
    top: 'Top',
    lvl: 'Level',
    of: 'of',
    you: 'You',
    rank: 'Rank',
    fxp: 'XP needed to level up',
    lvlbfor: 'Previous Level',
    lvlup: 'Current Level',
    mineCd: 'You can return to the mine in',
    mine: 'Great! You mined',
    restEcon: 'The bot economy has been restored',
    shop: 'Shop',
    shopMsg: 'You can buy using',
    prem: 'Premium',
    onTransfer: 'You are making a transfer',
    transItem: 'Transferable items',
    confirm: 'Are you sure you want to transfer',
    to: 'To',
    payNan: 'Insufficient funds to transfer',
    payCd: 'Time has run out',
    cancelPay: 'Transfer canceled',
    pay: 'Transfer of',
    payError: 'Error transferring',
    wd: 'How many *Coins* are you trying to withdraw?',
    wdYes: 'You have withdrawn',
    noWd: 'You cannot withdraw more than what you have in the bank',
    weeklyCd: `It's called a weekly reward 😉. Come back in`,
    weekly: '*WEEKLY REWARD*\n\nOh! Has a week already passed? Anyway, here is',
    workCd: 'You can return to work in',

    nable: 'Enabled',
    disable: 'Disabled',
    toBot: 'For this bot',
    toGp: 'For this group',
    gaytex: 'Who wants to violate this gay?',
    result: 'Result',
    shipCd: 'You can choose another partner within',
    shipp: 'Couple of the day',
    toaud: 'Reply to the video or voice note you want to convert to mp3 with the command',
    toav: 'Reply to the audio you want to convert to a voice note with',

    noGame: 'Not in a game',
    resGame: 'The *TicTacToe* session has been reset',
    gameOff: 'The game has ended',
    gaDone: 'Correct answer',
    win: 'You won',
    mathOff: 'No more chances',
    chance: 'Chances',
    answer: 'Answer',
    mathError: '*Incorrect answer*\n\nThere are still',
    gameMode: 'Available Difficulties',
    mathOn: 'There are still unanswered questions in this group',
    time: 'Time',
    timeOff: 'Time is up!\nThe answer is:',
    reward: 'Reward',
    pptCd: 'To play again, you must wait',
    ppt: (usedPrefix, command) => `Select rock/paper/scissors\n\n📌 Example: *${usedPrefix + command}* paper`,
    coinNan: 'You don\'t have enough *Coins* to play',
    stone: 'rock',
    sciss: 'scissors',
    paper: 'paper',
    tie: 'Draw',
    win: 'You won',
    lost: 'You lost',
    roulet: (usedPrefix) => `You can place multiple bets in a roulette game.\n\nUsage: *${usedPrefix}roulette* <amount> <space>\n\nPayout multiplier`,
    rouletCd: 'You have already placed a bet. Please wait',
    moreInfo: 'For more information',
    betMin: 'The bet amount must be greater than',
    betMax: 'The bet amount exceeds the maximum limit of',
    betNan: 'You don\'t have enough *Coins* to place that bet',
    in: 'in',
    bet: 'You have placed a bet of',
    fell: 'The roulette landed on',
    slotC: 'You almost made it, keep trying :)',

    delWarnUser: 'An admin reduced your warning, you now have',
    warnNan: 'The user has no warnings',
    delwarn: 'Unwarn',
    warns: 'Warnings',
    warn: 'Warning',
    warnRec: 'You received a warning from an admin',
    numError: 'Incorrect number',
    promote: 'User Promoted',
    demote: 'User Demoted',
    gpInfo: 'Group Info',
    members: 'Members',
    gpOwner: 'Group Owner',
    admin: 'Admin',
    gpConf: 'Group Configuration',
    gpConfMsg: 'Message Configuration',
    kick: 'User Kicked',
    linkGp: 'Group Link',
    preNan: 'Enter a valid prefix number',
    gpNanPre: 'The group has no members with the prefix',
    userPref: 'Users with the prefix',
    profile: 'Profile',
    number: 'Number',
    age: 'Age',
    gender: 'Gender',
    lang: 'Language',
    regOn: 'Registered',
    xpUp: 'Ready to',
    upNan: 'Remaining to level up',
    gpRulesNan: 'Group has no rules at the moment',
    gpRules: 'Group Rules',
    rulesMsgOn: 'Group *Rules* have been set',
    rulesMsg: 'Enter the Group Rules',
    welMsgOn: 'Welcome message has been set',
    leaMsgOn: 'Goodbye message has been set',
    welMsg: 'Enter the Welcome message\n\n@user (mention)\n@group (Group name)\n@desc (Group description)',
    leaMsg: 'Enter the Goodbye message\n\n@user (mention)',
    gpSetting: 'Group Settings\n\nOpen and close the group',
    user: 'User',
    userWarn: 'User Warned',
    wningUser: (war) => `If you receive *${war}* warnings, you will be automatically removed from the group`,
    warnMaxU: (war) => `The user exceeded *${war}* warnings and will be removed`,
    blockNan: 'No Blocked Numbers',
    bckList: 'Blocked List',
    donate: '*DONATION*\nYou can donate if you want to help keep the bot active',
    langList: 'Select the language you want to use\n\n≡ *Available Languages*',
    expire: 'Expires in',
    ping: 'Speed',
    uptime: 'Uptime',
    gpNsfw: (usedPrefix) => `The group does not allow NSFW content\nUse this group\n${bgp3}\n\nIf you are an admin, enable it with\n*${usedPrefix}enable* nsfw`,
    nsfwAge: 'You are under age! Come back when you\'re over 18',
    addPremUser: 'You are now a Premium User',
    banChat: 'Bot has been disabled in this group',
    unBanChat: 'Bot is active in this group',
    banUser: 'You can no longer use my commands',
    unBanUser: 'You have been unbanned',
    restartBot: 'Restarting Bot...\nPlease wait',

    genderList: 'Available Genders',
    man: 'Male',
    woman: 'Female',
    other: 'Other',
    regIsOn: 'You are already registered\n\nDo you want to register again?\n\n 📌 Use this command to remove your registration',
    nameMax: 'The name is too long',
    oldReg: 'Wow, grandpa wants to play with the bot',
    numSn: 'Serial Number',
    snVerify: 'Verify your serial number with the command',
    snError: 'Incorrect serial number',
    unReg: 'Registration Removed',
    stickError: 'Conversion failed, try sending *image/video/gif* first and then reply with the command',
    tgStick: 'Enter a link to a Telegram sticker pack',
    replyStick: 'Reply to a Sticker',
    ssWeb: 'Enter the URL of a webpage',
    tradList: 'List of Supported Languages',
    searchError: 'No results found',

    rownerH: 'This command can only be used by the *Bot Creator*',
    ownerH: 'This command can only be used by the *Owner and Sub Bots*',
    modsH: 'This function is only for *Bot Moderators*',
    premH: 'This command is only for *Premium Members*\n\nType */premium* for more info',
    groupH: 'This command can only be used in groups',
    privateH: 'This command can only be used in the *Bot\'s private chat*',
    adminH: 'This command is only for *Group Admins*',
    botAdmin: 'To use this command, I must be an *Administrator*!',
    unregH: 'Register to use this feature by typing:\n\n*/reg*'
}

export default translations