const express = require('express')
const hbs = require('express-handlebars')
const { createClient } = require('redis')

const redisclient = createClient();