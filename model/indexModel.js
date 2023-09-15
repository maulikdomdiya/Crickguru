const mongoose = require('mongoose');

const appSchema = mongoose.Schema({
    APP_NAME: {
        type: String,
        required: false
    },
    GOOGLE_ID: {
        type: String,
        required: false
    },
    GOOGLE_APPOPEN: {
        type: String,
        required: false
    },
    GOOGLE_BANNER: {
        type: String,
        required: false
    },
    GOOGLE_NATIVE_BANNER: {
        type: String,
        required: false
    },
    GOOGLE_NATIVE_MEDIUM: {
        type: String,
        required: false
    },
    GOOGLE_NATIVE_MREC: {
        type: String,
        required: false
    },
    GOOGLE_INTERSTITIAL: {
        type: String,
        required: false
    },
    GOOGLE_INTERSTITIAL_BACK: {
        type: String,
        required: false
    },
    FB_BANNER: {
        type: String,
        required: false
    },
    FB_NATIVE_BANNER: {
        type: String,
        required: false
    },
    FB_NATIVE_MEDIUM: {
        type: String,
        required: false
    },
    FB_NATIVE_MREC: {
        type: String,
        required: false
    },
    FB_INTERSTITIAL: {
        type: String,
        required: false
    },
    FB_INTERSTITIAL_BACK: {
        type: String,
        required: false
    },
    APPLOVIN_KEY: {
        type: String,
        required: false
    },
    APPLOVIN_BANNER: {
        type: String,
        required: false
    },
    APPLOVIN_NATIVE_BANNER: {
        type: String,
        required: false
    },
    APPLOVIN_NATIVE_MEDIUM: {
        type: String,
        required: false
    },
    APPLOVIN_NATIVE_MREC: {
        type: String,
        required: false
    },
    APPLOVIN_INTERSTITIAL: {
        type: String,
        required: false
    },
    APPLOVIN_INTERSTITIAL_BACK: {
        type: String,
        required: false
    },
    AD_COUNT_FORWARD: {
        type: String,
        required: false
    },
    AD_COUNT_BACKWARD: {
        type: String,
        required: false
    },
    TAB_ADS: {
        Boolean
    },
    APP_STATUS: {
        type: String,
        required: false
    },
    APP_LINK: {
        type: String,
        required: false
    },
    QREKA_LINK: {
        type: String,
        required: false
    },
    MODEL_VERSION: {
        type: String,
        required: false
    },
    ADMOB_ID: {
        type: String,
        required: false
    },
    ADMOB_APPOPEN: {
        type: String,
        required: false
    },
    ADMOB_BANNER: {
        type: String,
        required: false
    },
    ADMOB_NATIVE_BANNER: {
        type: String,
        required: false
    },
    ADMOB_NATIVE_MEDIUM: {
        type: String,
        required: false
    },
    ADMOB_NATIVE_MREC: {
        type: String,
        required: false
    },
    ADMOB_INTERSTITIAL: {
        type: String,
        required: false
    },
    ADMOB_INTERSTITIAL_BACK: {
        type: String,
        required: false
    },
    ADMOB_REWARDED: {
        type: String,
        required: false
    },
    ADX_APPOPEN: {
        type: String,
        required: false
    },
    ADX_BANNER: {
        type: String,
        required: false
    },
    ADX_NATIVE_BANNER: {
        type: String,
        required: false
    },
    ADX_NATIVE_MEDIUM: {
        type: String,
        required: false
    },
    ADX_NATIVE_MREC: {
        type: String,
        required: false
    },
    ADX_INTERSTITIAL: {
        type: String,
        required: false
    },
    ADX_INTERSTITIAL_BACK: {
        type: String,
        required: false
    },
    ADX_REWARDED: {
        type: String,
        required: false
    },
    FB_REWARDED: {
        type: String,
        required: false
    },
    APPLOVIN_REWARDED: {
        type: String,
        required: false
    },
    AD_COUNT_NATIVE_ADAPTER: {
        type: String,
        required: false
    },
    ADMOB: {
        Boolean
    },
    ADX: {
        Boolean
    },
    FACEBOOK: {
        Boolean
    },
    APPLOVIN: {
        Boolean
    },
    click: {
        type: String,
        required: false
    },
    click_splash: {
        type: String,
        required: false
    },
    click_frag: {
        type: String,
        required: false
    },
    clickback: {
        type: String,
        required: false
    },
    Package_Name: {
        type: String,
        required: false
    },
    ad_banner: {
        type: String,
        required: false
    },
    ad_bannermax: {
        type: String,
        required: false
    },
    ad_native: {
        type: String,
        required: false
    },
    ad_native_med: {
        type: String,
        required: false
    },
    ad_inter: {
        type: String,
        required: false
    },
    ad_inter_splash: {
        type: String,
        required: false
    },
    ad_inter_frag: {
        type: String,
        required: false
    },
    ad_inter_back: {
        type: String,
        required: false
    },
    appopen: {
        type: String,
        required: false
    },
    blink: {
        type: String,
        required: false
    },
    blink_time: {
        type: String,
        required: false
    },
    update_link: {
        type: String,
        required: false
    },
    update_on: {
        type: String,
        required: false
    },
    fb_banner: {
        type: String,
        required: false
    },
    fb_native_banner: {
        type: String,
        required: false
    },
    fb_native: {
        type: String,
        required: false
    },
    fb_inter: {
        type: String,
        required: false
    },
    fb_inter_splash: {
        type: String,
        required: false
    },
    fb_inter_frag: {
        type: String,
        required: false
    },
    fb_on_off: {
        type: String,
        required: false
    },
    fb_on_off_splash: {
        type: String,
        required: false
    },
    fb_on_off_frag: {
        type: String,
        required: false
    },
    iron_on_off: {
        type: String,
        required: false
    },
    maxint: {
        type: String,
        required: false
    },
    maxint_splash: {
        type: String,
        required: false
    },
    maxint_frag: {
        type: String,
        required: false
    },
    maxint_back: {
        type: String,
        required: false
    },
    maxmrec: {
        type: String,
        required: false
    },
    maxnat: {
        type: String,
        required: false
    },
    maxnatsmall: {
        type: String,
        required: false
    },
    applovin_on_off: {
        type: String,
        required: false
    },
    applovin_on_off_splash: {
        type: String,
        required: false
    },
    applovin_on_off_frag: {
        type: String,
        required: false
    },
    applovin_on_off_back: {
        type: String,
        required: false
    },
    on_other: {
        type: String,
        required: false
    },
    qureka: {
        type: String,
        required: false
    },
    qureka_back: {
        type: String,
        required: false
    },
    adsurl: {
        type: String,
        required: false
    },
    adsurl_back: {
        type: String,
        required: false
    },
    app_status: {
        type: String,
        required: false
    },
    app_link: {
        type: String,
        required: false
    },
    extrapage: {
        type: String,
        required: false
    },
});

const AppModel = mongoose.model('App', appSchema);

module.exports = AppModel;
