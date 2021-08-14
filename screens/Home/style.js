import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: '#050a11',
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 50,
        alignItems: 'center'
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    balanceWrapper: {
        paddingVertical: 30,
    },
    balanceTitle: {
        color: '#99A4AE',
        fontSize: 17,
    },
    balanceValueWrapper: {
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'center',
    },
    balanceValue: {
        color: '#BABCC0',
        fontSize: 45,
        fontWeight: 'bold',
        paddingRight: 10,
    },
    balanceValueCoin: {
        color: '#99A4AE',
    },
    balanceTrendingWrapper: {
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'center',
    },
    balanceTrending: {
        color: '#49976A',
        fontWeight: 'bold',
        fontSize: 18,
        paddingRight: 10,
    },
    searchWrapper: {
        marginTop: 20,
        flexDirection: 'row',
        backgroundColor: '#1B2028',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginBottom: 25,
    },
    searchInput: {
        flex: 1,
        paddingHorizontal: 20,
        color: '#99A4AE',
        fontSize: 16,
    },
    cryptoItemWrapper: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
    },
    cryptoItemImage: {
        backgroundColor: '#1B2028',
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cryptoItemNameWrapper: {
        paddingLeft: 10,
    },
    cryptoItemName: {
        color: '#BABCC0',
        fontSize: 18,
        fontWeight: 'bold'
    },
    cryptoItemSymbol: {
        fontSize: 12,
        color: '#99A4AE',
        textTransform: 'uppercase',
    },
    chartWrapper: {
        flex: 1,
        marginLeft: 10,
        alignItems: 'center',
    },
    cryptoItemPriceWrapper: {
        paddingLeft: 10,
    },
    cryptoItemPrice: {
        color: '#BABCC0',
        fontSize: 18,
        fontWeight: 'bold'
    },
    cryptoItemPercentageWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
});