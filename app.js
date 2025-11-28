const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (_, res) => {
    const accounts = [
        {
            id: "1001",
            balance: "125,325",
            currency: "KHR",
            accNumber: "0001-31234233-66"
        },
        {
            id: "1002",
            balance: "515",
            currency: "USD",
            accNumber: "0001-31234233-67"
        },
        {
            id: "1003",
            balance: "9,099,100",
            currency: "KHR",
            accNumber: "091074923"
        },
        {
            id: "1004",
            balance: "10",
            currency: "USD",
            accNumber: "091074923"
        },
    ]
    res.send(accounts)
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})