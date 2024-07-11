import SupplierService from '../../services/dashboard/supplier_service.js';

export async function suppliersIndex(req, res) {
  const allSuppliers = await SupplierService.getSuppliers();
  res.render('../views/dashboard/suppliers', {
    suppliers: allSuppliers,
  });
}
