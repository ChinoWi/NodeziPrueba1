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
                    className="CircularProgressInfo-Bg"
                    cx={this.props.radius}
                    cy={this.props.radius}
                    r={radius}
                    strokeWidth={`${this.props.strokeWidth}px`} />
                <circle
                    className="CircularProgressInfo-Fg"
                    cx={this.props.radius}
                    cy={this.props.radius}
                    r={radius}
                    strokeWidth={`${this.props.strokeWidth}px`}
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset
                    }} />
                <circle
                    className="CircularProgressInfo-Fy"
                    cx="50"
                    cy="50"
                    r="40"
                    strokeWidth="15px"
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset1
                    }} />
                <text
                    className="CircularProgressInfo-Text"
                    style={this.props.textPorcentage}
                    x={this.props.radius}
                    y={this.props.radius}
                    dy=".4em"
                    textAnchor="middle">
                    {`${this.props.percentage}`}
                </text>
            </svg>
        );
    }
}

CircularProgressInfo.defaultProps = {
    radius: 50,
    percentage:50,
    percentage1:10,
    strokeWidth: 1
};