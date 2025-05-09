import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, TextField, AppBar, Toolbar, Typography, Container, Box, Grid, Card, CardContent } from '@material-ui/core';

const SaleChartWithHeaderAndFooter = () => {
    const [salesData, setSalesData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [dailySalesReport, setDailySalesReport] = useState([]);

    useEffect(() => {
        fetchSalesData();
    }, []);

    const fetchSalesData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/sales/sale/all');
            setSalesData(response.data);
            setFilteredData(response.data); // Initially set filtered data to all sales data

            // Fetch total revenue
            const totalRevenueResponse = await axios.get('http://localhost:8080/sales/total-revenue');
            setTotalRevenue(totalRevenueResponse.data);

            // Fetch daily sales report
            const dailyReportResponse = await axios.get('http://localhost:8080/sales/daily-report');
            setDailySalesReport(dailyReportResponse.data);
        } catch (error) {
            console.error('Error fetching sales data:', error);
        }
    };

    // Filter data based on search term
    useEffect(() => {
        const filtered = salesData.filter(sale =>
            sale.vehicle.make.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchTerm, salesData]);// comparing the search data with all data

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppBar position="static" style={{ background: '#333' }}>
                <Toolbar>
                    <Typography variant="h6">Sales Dashboard</Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md" style={{ marginTop: '10px', marginBottom: '10px', flex: 1 }}>
                <TextField
                    label="Search by Make"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    fullWidth
                    style={{ marginBottom: '10px' }}
                />
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TableContainer component={Paper} className="table-container">
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Make</TableCell>
                                        <TableCell>Model</TableCell>
                                        <TableCell>Year</TableCell>
                                        <TableCell>VIN</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell>Price</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredData.map((sale) => (
                                        <TableRow key={sale.saleId}>
                                            <TableCell>{sale.vehicle.make}</TableCell>
                                            <TableCell>{sale.vehicle.model}</TableCell>
                                            <TableCell>{sale.saleDate}</TableCell>
                                            <TableCell>{sale.vehicle.vin}</TableCell>
                                            <TableCell>{sale.customerId}</TableCell>
                                            <TableCell>${sale.price}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="md" style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Grid container spacing={1} align="center">
                    <Grid item xs={12}>
                        <Box mt={1}>
                            <Typography variant="h5" align="center">Total Revenue</Typography>
                            <Card>
                                <CardContent style={{ color: 'green' }}>
                                    <Typography variant="h6">${totalRevenue}</Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <AppBar position="static" style={{ background: '#333', marginTop: 'auto' }}>
                <Toolbar>
                    <Typography variant="h6"></Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default SaleChartWithHeaderAndFooter;
