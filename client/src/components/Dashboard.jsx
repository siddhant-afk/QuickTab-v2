import { Box } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

function Dashboard() {


    return (
        <section className="dashboard">
            <Box bg='white' w='1250px'  color='black' border='1px' borderColor='#ede6e6' borderTopRadius='md'>
         <Box bg='#F8F9FA'  >
         <h1 className="text-xl bg-gray-200 p-3" >Total Receivables</h1>
         </Box>
         <Grid templateColumns='20% 80%' p={0} h='80px' w='100%'>
          <GridItem paddingTop={1} paddingLeft={5} borderRight='1px' color='#2D7BF8' borderColor='#ede6e6'>
            CURRENT <br />
            <span className='text-black'>$0.00</span>
          </GridItem>
          <GridItem   paddingTop={1} color='tomato' paddingLeft={5}>
            OVERDUE <br />
            <Grid templateColumns='auto auto auto auto' color='black'>
              <GridItem>$12.06 <br /> <span className="text-gray-500 text-sm">1-15 Days</span></GridItem>
              <GridItem>$0.00 <br /> <span className="text-gray-500 text-sm">16-30 Days</span></GridItem>
              <GridItem>$0.00 <br /> <span className="text-gray-500 text-sm">31-45 Days</span></GridItem>
              <GridItem>$377,562.99 <br /> <span className="text-gray-500 text-sm">Above 45 Days</span></GridItem>
            </Grid>


            </GridItem>
         </Grid>
           
</Box>
            
            
          
        </section>

    )
}

export default Dashboard;