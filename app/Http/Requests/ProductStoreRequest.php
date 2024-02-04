<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class ProductStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'brand_slug' => 'required',
            'supplier_id' => 'required',
            'buying_price' => 'required',
            'name' => 'required',
            'image' => 'required|mimes:jpg,jpeg,png,webp,avif|max:2048',
            'sale_price' => 'required',
            'total_quantity' => 'required'
        ];
    }

    public function messages(): array
    {
        return [
            'brand_slug.required'               => 'Brand is required',
            'supplier_id.required'               => 'Supplier is required',
            'buying_price.required'               => 'Buying price field is required',
            'name.required'               => 'Name field is required',
            'image.required'               => 'Image field is required',
            'sale_price.required'               => 'Sale price field is required',
            'total_quantity.required'               => 'Total quantity field is required',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        $this->flash($this->all());
        parent::failedValidation($validator);
    }
}
