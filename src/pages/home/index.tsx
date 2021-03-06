import React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
  Guide,
} from 'bizcharts';

const { Line } = Guide;

const Home:React.FC = () => {
  const data: object[] = [
    {
      month: 'Jan',
      city: 'China',
      revenue: 7,
    },
    {
      month: 'Jan',
      city: 'Oversea',
      revenue: 3.9,
    },
    {
      month: 'Feb',
      city: 'China',
      revenue: 6.9,
    },
    {
      month: 'Feb',
      city: 'Oversea',
      revenue: 4.2,
    },
    {
      month: 'Mar',
      city: 'China',
      revenue: 9.5,
    },
    {
      month: 'Mar',
      city: 'Oversea',
      revenue: 5.7,
    },
    {
      month: 'Apr',
      city: 'China',
      revenue: 14.5,
    },
    {
      month: 'Apr',
      city: 'Oversea',
      revenue: 8.5,
    },
    {
      month: 'May',
      city: 'China',
      revenue: 18.4,
    },
    {
      month: 'May',
      city: 'Oversea',
      revenue: 11.9,
    },
    {
      month: 'Jun',
      city: 'China',
      revenue: 21.5,
    },
    {
      month: 'Jun',
      city: 'Oversea',
      revenue: 15.2,
    },
    {
      month: 'Jul',
      city: 'China',
      revenue: 25.2,
    },
    {
      month: 'Jul',
      city: 'Oversea',
      revenue: 17,
    },
    {
      month: 'Aug',
      city: 'China',
      revenue: 26.5,
    },
    {
      month: 'Aug',
      city: 'Oversea',
      revenue: 16.6,
    },
    {
      month: 'Sep',
      city: 'China',
      revenue: 23.3,
    },
    {
      month: 'Sep',
      city: 'Oversea',
      revenue: 14.2,
    },
    {
      month: 'Oct',
      city: 'China',
      revenue: 18.3,
    },
    {
      month: 'Oct',
      city: 'Oversea',
      revenue: 10.3,
    },
    {
      month: 'Nov',
      city: 'China',
      revenue: 13.9,
    },
    {
      month: 'Nov',
      city: 'Oversea',
      revenue: 6.6,
    },
    {
      month: 'Dec',
      city: 'China',
      revenue: 9.6,
    },
    {
      month: 'Dec',
      city: 'Oversea',
      revenue: 4.8,
    },
  ];
  const cols: object = {
    month: {
      range: [0,
        1],
    },
  };
  return (
    <div style={{ marginTop: '10%' }}>
      <Chart height={400} data={data} scale={cols} forceFit>
        <Legend />
        <Axis name='month' />
        <Axis
          name='revenue'
          label={{
            formatter: (val) => `${val}???`,
          }}
        />
        <Tooltip
          crosshairs={{
            type: 'y',
          }}
        />
        <Geom type='line' position='month*revenue' size={2} color={'city'} />
        <Geom
          type='point'
          position='month*revenue'
          size={4}
          shape={'circle'}
          color={'city'}
          style={{
            stroke: '#fff',
            lineWidth: 1,
          }}
        />
        <Guide>
          <Line
            top // {boolean} ?????? guide ??????????????? canvas ????????????????????? false, ?????????????????????
            start={{ month: 'Aug', revenue: 26.5 }} // {object} | {function} | {array} ?????????????????????????????????????????????????????? callback
            end={{ month: 'Dec', revenue: 29 }} // ??? start
            lineStyle={{
              stroke: '#999', // ????????????
              lineDash: [0,
                2,
                2], // ???????????????
              lineWidth: 3, // ????????????
            }} // {object} ?????????????????? https://bizcharts.net/products/bizCharts/api/graphic#????????????
            text={{
              position: 'start', // 'start' | 'center' | 'end' | '39%' | 0.5 ?????????????????????
              autoRotate: true, // {boolean} ??????????????????????????????????????? true
              style: {
                fill: 'red',
              }, // {object}????????????????????????,https://bizcharts.net/products/bizCharts/api/graphic#????????????
              offsetX: 20, // {number} x ??????????????????
              offsetY: -10, // {number} y ??????????????????
              content: '?????????????????????', // {string} ???????????????
            }}
          />
        </Guide>
      </Chart>
    </div>
  );
}

export default Home;
