type CreatePaymentWithSplitDto = {
  amount_cents: number;
  description: string;
  customer: Customer;
  card_attributes?: Card;
  installment_plan?: InstallmentPlan;
  sale_id?: string;
  pre_capture?: boolean;
  protest_link?: boolean;
  amount_fee?: number;
  form_payment?: FormPaymentEnum;
  success_return_url?: string;
  error_return_url?: string;
  has_split_rules?: boolean;
  split_rules?: Array<CreateSplitRules>;
  confirmation_required?: boolean;
  extract_identification?: string;
  active_3ds?: boolean;
  risk_custom_field?: string;
  service_id?: string;
  protocol?: string;
  recurrence?: boolean;
  recurrence_day?: number;
  celcoin_id?: string;
};

type Card = {
  holder_name: string;
  number: string;
  expiration_month: string;
  expiration_year: string;
  security_code: string;
};

type Customer = {
  first_name: string;
  last_name: string;
  document?: string;
  email?: string;
  ip?: string;
  billing_address?: BillingAddress;
};

type BillingAddress = {
  city: string;
  country: string;
  house_number_or_name: string;
  postal_code: string;
  street: string;
  state: string;
};

type InstallmentPlan = {
    number_installments: number;
}

enum FormPaymentEnum {
  Credit = 'credit',
  Debit = 'debit',
}

type CreateSplitRules = {
  amount: number;
  seller_id: string;
  description?: string;
  no_cost?: boolean;
};

export default CreatePaymentWithSplitDto;