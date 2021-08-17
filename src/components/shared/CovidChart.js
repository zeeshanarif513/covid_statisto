import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit'

const CovidChart = (props) => {
    return(
        <View>
            {props.data != null && Object.keys(props.data).length > 0 &&
            <LineChart
                data={
                    {
                        labels: Object.keys(props.data.cases).slice(-10),
                        datasets: [
                            {
                                data: Object.values(props.data.cases).slice(-10),
                            },
                        ],
                        legend: ["Cases"]
                    }
                }
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={
                    {
                        backgroundColor: "white",
                        backgroundGradientFrom: "white",
                        backgroundGradientTo: "white",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: () => '#473f98',
                        labelColor: () => '#473f98',
                        style: {
                            borderRadius: 16
                        },
                        propsForBackgroundLines: {
                            strokeDasharray: "" // solid background lines with no dashes
                       }
                        
                    }
                }
                withInnerLines = {false}
                horizontalLabelRotation
                verticalLabelRotation
                bezier
                style={
                    {
                        marginVertical: 8,
                        marginRight: 18,
                        borderRadius: 16
                    }
                }
            />
            }
        </View>
    );
}

export default CovidChart;