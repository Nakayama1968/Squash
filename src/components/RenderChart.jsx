/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import { VictoryPie } from 'victory-native';
import { Svg } from 'react-native-svg';
import {
  COLORS, FONTS, SIZES,
} from '../constants';

function RenderChart() {
  // dummy data
  const confirmStatus = 'C';

  const categoriesData = [
    {
      id: 1,
      name: 'Heart',
      //   icon: icons.Heart,
      color: 'hotpink',
      points: [
        {
          id: 3,
          title: 'Javascript Books',
          description: 'Javascript books',
          location: "ByProgrammers' Book Store",
          total: 60.00,
          status: confirmStatus,
        },
      ],
    },
    {
      id: 2,
      name: 'Contribute',
      //   icon: icons.food,
      color: 'yellowgreen',
      points: [
        {
          id: 6,
          title: 'Protein powder',
          description: 'Protein',
          location: "ByProgrammers' Pharmacy",
          total: 50.00,
          status: confirmStatus,
        },

      ],
    },
    {
      id: 3,
      name: 'Practice',
      //   icon: icons.baby_car,
      color: 'orange',
      points: [
        {
          id: 7,
          title: 'Toys',
          description: 'toys',
          location: "ByProgrammers' Toy Store",
          total: 28.00,
          status: confirmStatus,
        },
      ],
    },
  ];

  const [categories] = React.useState(categoriesData);
  const [viewMode] = React.useState('chart');
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  function processCategoryDataToDisplay() {
    // Filter points with "Confirmed" status
    const chartData = categories.map((item) => {
      const confirmPoints = item.points.filter((a) => a.status === 'C');
      const total = confirmPoints.reduce((a, b) => a + (b.total || 0), 0);

      return {
        name: item.name,
        y: total,
        pointCount: 10,
        color: item.color,
        id: item.id,
      };
    });

    // filter out categories with no data/points
    const filterChartData = chartData.filter((a) => a.y > 0);

    // Calculate the total points
    const totalpoint = filterChartData.reduce((a, b) => a + (b.y || 0), 0);

    // Calculate percentage and repopulate chart data
    const finalChartData = filterChartData.map((item) => {
      const percentage = ((item.y / totalpoint) * 100).toFixed(0);
      return {
        label: `${percentage}%`,
        y: Number(item.y),
        pointCount: item.pointCount,
        color: item.color,
        name: item.name,
        id: item.id,
      };
    });

    return finalChartData;
  }

  function setSelectCategoryByName(name) {
    const category = categories.filter((a) => a.name === name);
    setSelectedCategory(category[0]);
  }

  function renderChart() {
    const chartData = processCategoryDataToDisplay();
    const colorScales = chartData.map((item) => item.color);
    const totalpointCount = 138;
    // chartData.reduce((a, b) => a + (b.pointCount || 0), 0);

    console.log('Check Chart');
    console.log(chartData);

    if (Platform.OS === 'ios') {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <VictoryPie
            data={chartData}
            labels={(datum) => `${datum.y}`}
            radius={
                ({ datum }) => ((selectedCategory && selectedCategory.name === datum.name)
                  ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10)
}
            innerRadius={90}
            labelRadius={({ innerRadius }) => (SIZES.width * 0.45 + innerRadius) / 2.5}
            style={{
              labels: { fill: 'white' },
              parent: {
                ...styles.shadow,
              },
            }}
            width={SIZES.width * 0.8}
            height={SIZES.width * 0.8}
            colorScale={colorScales}
            events={[{
              target: 'data',
              eventHandlers: {
                onPress: () => [{
                  target: 'labels',
                  mutation: (props) => {
                    const categoryName = chartData[props.index].name;
                    setSelectCategoryByName(categoryName);
                  },
                }],
              },
            }]}
          />

          <View style={{ position: 'absolute', top: '42%', left: '42%' }}>
            <Text style={{ ...FONTS.h1, textAlign: 'center' }}>{totalpointCount}</Text>
            <Text style={{ ...FONTS.body3, textAlign: 'center' }}>AllPoints</Text>
          </View>
        </View>

      );
    }
    // Android workaround by wrapping VictoryPie with SVG
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Svg width={SIZES.width} height={SIZES.width} style={{ width: '100%', height: 'auto' }}>

          <VictoryPie
            standalone={false} // Android workaround
            data={chartData}
            labels={(datum) => `${datum.y}`}
            radius={
                ({ datum }) => ((selectedCategory && selectedCategory.name === datum.name)
                  ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10)
}
            innerRadius={70}
            labelRadius={({ innerRadius }) => (SIZES.width * 0.4 + innerRadius) / 2.5}
            style={{
              labels: { fill: 'white' },
              parent: {
                ...styles.shadow,
              },
            }}
            width={SIZES.width}
            height={SIZES.width}
            colorScale={colorScales}
            events={[{
              target: 'data',
              eventHandlers: {
                onPress: () => [{
                  target: 'labels',
                  mutation: (props) => {
                    const categoryName = chartData[props.index].name;
                    setSelectCategoryByName(categoryName);
                  },
                }],
              },
            }]}
          />
        </Svg>
      </View>
    );
  }

  function renderPointsummary() {
    const data = processCategoryDataToDisplay();

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          height: 40,
          margin: 3,
          padding: 10,
          borderRadius: 10,
          backgroundColor:
           (selectedCategory && selectedCategory.name === item.name) ? item.color : COLORS.white,
        }}
        onPress={() => {
          const categoryName = item.name;
          setSelectCategoryByName(categoryName);
        }}
      >
        {/* Name/Category */}
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor:
               (selectedCategory && selectedCategory.name === item.name)
                 ? COLORS.white : item.color,
              borderRadius: 5,
            }}
          />

          <Text style={
              {
                marginLeft: SIZES.base,
                color: (selectedCategory && selectedCategory.name === item.name)
                  ? COLORS.white : COLORS.primary,
                ...FONTS.h3,
              }
}
          >
            {item.name}

          </Text>
        </View>

        {/* Points */}
        <View style={{ justifyContent: 'center' }}>
          <Text style={
              {
                color: (selectedCategory && selectedCategory.name === item.name)
                  ? COLORS.white : COLORS.primary,
                ...FONTS.h3,
              }
}
          >
            {item.y}
            {' '}
            Points -
            {' '}
            {item.label}
          </Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={{ padding: '5%' }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>

    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#ececec', top: 30 }}>

      <View>
        {viewMode === 'chart' && (
        <View>
          {renderChart()}
          {renderPointsummary()}
        </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});

export default RenderChart;
