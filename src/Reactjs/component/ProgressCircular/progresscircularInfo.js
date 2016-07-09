import React from 'react';


export default class CircularProgressInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const radius = this.props.radius - this.props.strokeWidth / 2;
        const width = this.props.radius * 2;
        const height = this.props.radius * 2;
        const viewBox = `0 0 ${width} ${height}`;
        const dashArray = radius * Math.PI * 2;

        const dashOffset = dashArray - dashArray * this.props.percentage / 100;
        const dashOffset1 = dashArray - dashArray * this.props.percentage1 / 100;

        return (
            <svg
                className="CircularProgressInfo"
                width={this.props.radius * 2}
                height={this.props.radius * 2}
                viewBox={viewBox}>
                <circle
                    stroke={this.props.stroken}
                    fill="none"
                    cx={this.props.radius}
                    cy={this.props.radius}
                    r={radius}
                    strokeWidth={`${this.props.strokeWidth}px`}/>
                <text
                    style={{fontSize:this.props.fontsize}}
                    fill={this.props.stroken}
                    x={this.props.radius}
                    y={this.props.radius}
                    dy=".4em"
                    textAnchor="middle">
                    {`${this.props.percentage}%`}
                </text>
            </svg>
        );
    }
}

CircularProgressInfo.defaultProps = {
    radius: 50,
    fillcolorText:"blue",
    stroken:"blue",
    percentage:50,
    percentage1:10,
    strokeWidth: 1
};