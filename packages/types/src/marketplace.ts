export enum ServiceStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
}

export interface Service {
  id: number;
  vendorId: number;
  title: string;
  description: string;
  price: number;
  status: ServiceStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: number;
  buyerId: number;
  serviceId: number;
  status: OrderStatus;
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
}
