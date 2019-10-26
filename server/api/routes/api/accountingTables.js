const express = require('express');
const router = express.Router();
const AccountingTablesService = require('../../services/accountingTables');

router.get('/', AccountingTablesService.getAccountingTables);
router.post('/', AccountingTablesService.createAccountingTable);
router.get('/:tableId', AccountingTablesService.getAccountingTable);
router.put('/:tableId', AccountingTablesService.updateAccountingTable);
router.delete('/:tableId', AccountingTablesService.deleteAccountingTable);

module.exports = router;