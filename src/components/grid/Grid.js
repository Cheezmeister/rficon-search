import React, { Component } from 'react';
import GridItem from './GridItem';
import InfiniteScroll from 'react-infinite-scroller';

class Grid extends Component {
    constructor(props){
        super(props);
        let iconsArr = [];
        const { gridData, hasMoreItems } = props;
        
        this.state = {
            iconsArr: this.getGridData(gridData),
            hasMoreItems: hasMoreItems,
            gridData,
            currentPageStart: 0
        }
        this.loadItems = this.loadItems.bind(this);
    }
    getGridData(gridData){
        let iconsArr = [];
        for(let i=0;i<20;i++){
            if(i<gridData.length){
                iconsArr.push(gridData[i])
            }
        }
        return iconsArr;
    }
    componentWillReceiveProps(nextProps){
        this.setState(
            {
                gridData : nextProps.gridData,
                iconsArr : this.getGridData(nextProps.gridData),
                hasMoreItems: nextProps.hasMoreItems
            }
        )
    }
    loadItems(page){
        let { currentPageStart,gridData, iconsArr } = this.state;
        let tempStart = currentPageStart;
        for(let i=currentPageStart ; i<tempStart+20 && currentPageStart<gridData.length; i++,currentPageStart++){
            iconsArr.push(gridData[i]);
        }
        if(currentPageStart<gridData.length){
             this.setState({
                iconsArr,
                currentPageStart
             })
        }else{
             this.setState({
                hasMoreItems: false
            })
        }
    }
    render () {
        const { gridStyle, scrollerStyle } = style;
        const  {iconsArr, hasMoreItems}  = this.state;
        
        return (
            <div style={ gridStyle }>
                <InfiniteScroll style={scrollerStyle} pageStart={0} threshold={400} loadMore={this.loadItems} hasMore={hasMoreItems}  useWindow={false} >    
                 {
                    iconsArr.map((item,indx) => <GridItem key={indx} data={item}/>)
                 }
                </InfiniteScroll>
            </div>
        )
    }
}

const style = {
    gridStyle: {
        height:'calc(100% - 100px)', 
        overflowX : 'auto', 
        alignItems: 'center',
        overflowY : 'auto'
    },
    scrollerStyle:{
         display: "flex",  
        flexFlow: 'row wrap', 
        justifyContent:'center',
    }
}

export default Grid