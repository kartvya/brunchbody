import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { CustomTopTabs } from '../../../components';
import Day from './Day';
import Month from './Month';
import Week from './Week';
import Year from './Year';
import style from './style';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Dashboard(props) {
  const { tabs, selectedTab } = props;

  return (
    <SafeAreaView style={style.safeAreaView}>
      <View style={style.headingView}>
        <Text style={style.headingText1}>Dashboard</Text>
      </View>

      <View>
        <CustomTopTabs {...props} data={tabs} />
      </View>

      {selectedTab === 1 ? (
        <Day {...props} />
      ) : selectedTab === 2 ? (
        <Week {...props} />
      ) : selectedTab === 3 ? (
        <Month {...props} />
      ) : (
        <Year {...props} />
      )}
    </SafeAreaView>
  );
}

Dashboard.propTypes = {
  selectedTab: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.any).isRequired,
};
