import React from 'react';
import {StyleSheet, Text, View, Button, DeviceEventEmitter} from 'react-native';
import {
    AdMobBanner,
    AdMobInterstitial,
    AdMobRewarded
} from 'expo';

export default class App extends React.Component {

    componentDidMount() {
        AdMobInterstitial.setTestDeviceID('EMULATOR');
        // ALWAYS USE TEST ID for Admob ads
        AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');

        AdMobInterstitial.addEventListener('interstitialDidLoad',
            () => console.log('interstitialDidLoad')
        );

        AdMobInterstitial.addEventListener('interstitialDidFailToLoad',
            () => console.log('interstitialDidFailToLoad')
        );

        AdMobInterstitial.addEventListener('interstitialDidOpen',
            () => console.log('interstitialDidOpen')
        );
        AdMobInterstitial.addEventListener('interstitialDidClose',
            () => console.log('interstitialDidClose')
        );
        AdMobInterstitial.addEventListener('interstitialWillLeaveApplication',
            () => console.log('interstitialWillLeaveApplication')
        );

        AdMobRewarded.setTestDeviceID('EMULATOR');
        // ALWAYS USE TEST ID for Admob ads
        AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/1712485313');

        AdMobRewarded.addEventListener('rewardedVideoDidRewardUser',
            () => console.log('interstitialDidLoad')
        );
        AdMobRewarded.addEventListener('rewardedVideoDidLoad',
            () => console.log('interstitialDidLoad')
        );
        AdMobRewarded.addEventListener('rewardedVideoDidFailToLoad',
            () => console.log('interstitialDidLoad')
        );
        AdMobRewarded.addEventListener('rewardedVideoDidOpen',
            () => console.log('interstitialDidLoad')
        );
        AdMobRewarded.addEventListener('rewardedVideoDidClose',
            () => console.log('interstitialDidLoad')
        );
        AdMobRewarded.addEventListener('rewardedVideoWillLeaveApplication',
            () => console.log('interstitialDidLoad')
        );
    }

    componentWillUnmount() {
        // remove all event listeners for interstitial/rewarded ads
        AdMobInterstitial.removeAllListeners();
        AdMobRewarded.removeAllListeners();
    }

    bannerError() {
        console.log('An error');
        return;
    }

    showInterstitial() {
        // first - load ads and only then - show
        AdMobInterstitial.requestAd(() => AdMobInterstitial.showAd());
    }

    showRewarded() {
        // first - load ads and only then - show
        AdMobRewarded.requestAd(() => AdMobRewarded.showAd());
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Button title="Interstitial"
                        onPress={this.showInterstitial}
                        containerViewStyle={styles.interstitialBanner}/>
                <Button title="Rewarded"
                        onPress={this.showRewarded}
                        containerViewStyle={styles.rewardedBanner}/>
                <AdMobBanner
                    style={styles.bottomBanner}
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                    testDeviceID="EMULATOR"
                    didFailToReceiveAdWithError={this.bannerError}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rewardedBanner: {
        width: '100%',
        marginLeft: 0
    },
    interstitialBanner: {
        width: '100%',
        marginLeft: 0
    },
    bottomBanner: {
        position: 'absolute',
        bottom: 0,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
